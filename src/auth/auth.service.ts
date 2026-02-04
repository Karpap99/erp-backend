import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../entities/User';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

export interface AuthTokenResponse {
  access_token: string;
  user: Omit<User, 'password'>;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    if (createUserDto.email) {
      const user = await this.userService.findByEmail(createUserDto.email);
      if (user) {
        throw new ConflictException(
          `User with email ${createUserDto.email} already exists`,
        );
      }
    } else {
      throw new BadRequestException('Email is required');
    }

    if (!createUserDto.password || createUserDto.password.length < 6) {
      throw new BadRequestException(
        'Password is required and must be at least 6 characters',
      );
    }

    const hashedPassword  = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;

    const user = await this.userService.create(createUserDto);
    return this.buildAuthResponse(user);
  }

  async login(loginDto: LoginDto): Promise<AuthTokenResponse> {
    const user = await this.userService.findOneByEmail(loginDto.email);
    const hashedPassword = user.password ?? '';
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      hashedPassword,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }
    return this.buildAuthResponse(user);
  }

  private buildAuthResponse(user: User): AuthTokenResponse {
    const payload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload);
    const { password: _, ...userWithoutPassword } = user;
    return { access_token, user: userWithoutPassword };
  }
}
