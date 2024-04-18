import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserCharacter } from './entity/userCharacter.entity';
import { UserClothCustom } from './entity/userCloth.entity';
import { CreateUserClothDto } from './dto/create-userCloth.dto';

@Controller('users')
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
  getUserAllCloths(@Param('id') empolyerId: number): Promise<UserClothCustom[]> {
    return this.userService.getUserAllCloths(empolyerId);
  }
  //유저 의상 등록, employerid(number)로 등록
  @Post('cloths')
  postUserCloth(@Body() data: CreateUserClothDto): void {
    this.userService.createUserCloth(data);
  }
  //유저 의상 의상아이디(number)로 삭제
  @Delete('cloths/:clothId')
  deleteUserCloth(@Param('clothId') clothId: number): void {
    this.userService.deleteUserClothsById(clothId);
  }
}
