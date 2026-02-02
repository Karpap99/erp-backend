import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreUsersService } from './store-users.service';
import { CreateStoreUserDto } from './dto/create-store-user.dto';
import { UpdateStoreUserDto } from './dto/update-store-user.dto';

@Controller('store-users')
export class StoreUsersController {
  constructor(private readonly storeUsersService: StoreUsersService) {}

  @Post()
  create(@Body() createStoreUserDto: CreateStoreUserDto) {
    return this.storeUsersService.create(createStoreUserDto);
  }

  @Get()
  findAll() {
    return this.storeUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreUserDto: UpdateStoreUserDto) {
    return this.storeUsersService.update(+id, updateStoreUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeUsersService.remove(+id);
  }
}
