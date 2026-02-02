import { Injectable } from '@nestjs/common';
import { CreateStoreUserDto } from './dto/create-store-user.dto';
import { UpdateStoreUserDto } from './dto/update-store-user.dto';

@Injectable()
export class StoreUsersService {
  create(createStoreUserDto: CreateStoreUserDto) {
    return 'This action adds a new storeUser';
  }

  findAll() {
    return `This action returns all storeUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeUser`;
  }

  update(id: number, updateStoreUserDto: UpdateStoreUserDto) {
    return `This action updates a #${id} storeUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeUser`;
  }
}
