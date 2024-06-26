import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserCharacter } from './entity/userCharacter.entity';
import { UserClothCustom } from './entity/userCloth.entity';
import { CreateUserClothDto } from './dto/create-userCloth.dto';
import { UpdateUserClothDto } from './dto/update-userCloth.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //전체 유저 목록 가져오기
  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  //특정 유저 아이디(string) 검색
  @Get(':id')
  getUserByUserId(@Param('id') userId: string): Promise<User> {
    return this.userService.getUserByUserId(userId);
  }

  //유저의 캐릭터 목록 유저아이디(number)로 검색
  @Get(':id/characters')
  getUserCharactersById(
    @Param('id') empolyerId: number,
  ): Promise<UserCharacter[]> {
    return this.userService.getUserCharactersById(empolyerId);
  }

  //유저의 의상 목록 유저아이디(number)로 검색
  @Get(':id/cloths')
  async getUserAllCloths(
    @Param('id') employerId: number,
  ): Promise<UserClothCustom[]> {
    return this.userService.getUserAllCloths(employerId);
  }

  //유저 의상 등록
  @Post('cloths')
  postUserCloth(@Body() data: CreateUserClothDto): Promise<string> {
    return this.userService.createUserCloth(data);
  }

  @Patch('cloths/:clothId')
  updateUserCloth(
    @Param('clothId') clothId: number,
    @Body() data: UpdateUserClothDto,
  ): Promise<string> {
    return this.userService.updateUserCloth(clothId, data);
  }

  //유저 의상 의상아이디(number)로 삭제
  @Delete('cloths/:clothId')
  deleteUserCloth(@Param('clothId') clothId: number): Promise<string> {
    return this.userService.deleteUserClothsById(clothId);
  }
}
