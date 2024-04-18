import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserCharacter } from './entity/userCharacter.entity';
import { UserClothCustom } from './entity/userCloth.entity';
import { CreateUserClothDto } from './dto/create-userCloth.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(UserCharacter)
    private userCharacterRepository: Repository<UserCharacter>,

    @InjectRepository(UserClothCustom)
    private userClothRepository: Repository<UserClothCustom>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserByUserId(userId: string): Promise<User> {
    return this.userRepository.findOne({ where: { userid: userId } });
  }

  async getUserCharactersById(employerId: number): Promise<UserCharacter[]> {
    return this.userCharacterRepository.find({
      where: {
        employerid: employerId,
      },
    });
  }

  async getUserAllCloths(employerId: number): Promise<UserClothCustom[]> {
    return this.userClothRepository.find({
      where: {
        employerid: employerId,
      },
    });
  }

  async createUserCloth(data: CreateUserClothDto): Promise<void> {
    // CreateUserClothDto에서 필요한 데이터 추출
    const { employerid } = data;

    // 의상 생성 및 저장
    const newCloth = new UserClothCustom();
    newCloth.employerid = Number(employerid);
    newCloth.createat = new Date();

    await this.userClothRepository.save(newCloth);
  }

  async deleteUserClothsById(id: number): Promise<void> {
    this.userClothRepository.delete({ id: id });
  }
}
