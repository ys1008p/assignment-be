import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserCharacter } from './entity/userCharacter.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserCharacterById(@Param('id') userId: number): Promise<UserCharacter[]> {
    return this.userService.getUserCharacterById(userId);
  }
}
