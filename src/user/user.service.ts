import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserCharacter } from './entity/userCharacter.entity';
import { UserClothCustom } from './entity/userCloth.entity';
import { CreateUserClothDto } from './dto/create-userCloth.dto';
import { UpdateUserClothDto } from './dto/update-userCloth.dto';

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
      relations: ['excelBaller'],
    });
  }

  async getUserAllCloths(employerId: number): Promise<UserClothCustom[]> {
    return this.userClothRepository.find({
      where: {
        employerid: employerId,
      },
      relations: ['excelCloth'],
    });
  }

  async createUserCloth(data: CreateUserClothDto): Promise<string> {
    const { characteruid, employerid, channel, clothno } = data;

    try {
      const newCloth = new UserClothCustom();
      newCloth.characteruid = Number(characteruid);
      newCloth.employerid = Number(employerid);
      newCloth.clothno = Number(clothno);
      newCloth.channel = channel;
      newCloth.createat = new Date();
      await this.userClothRepository.save(newCloth);

      return 'success';
    } catch (err) {
      return 'failed';
    }
  }

  async updateUserCloth(
    clothId: number,
    data: UpdateUserClothDto,
  ): Promise<string> {
    try {
      const clothToUpdate = await this.userClothRepository.findOne({
        where: { id: clothId },
      });

      if (data.characteruid !== undefined) {
        clothToUpdate.characteruid = Number(data.characteruid);
      }
      if (data.isequiped !== undefined) {
        clothToUpdate.isequiped = data.isequiped;
      }
      if (data.islock !== undefined) {
        clothToUpdate.islock = data.islock;
      }

      await this.userClothRepository.save(clothToUpdate);
      return 'success';
    } catch (err) {
      return 'failed';
    }
  }

  async deleteUserClothsById(id: number): Promise<string> {
    try {
      await this.userClothRepository.delete({ id: id });
      return 'success';
    } catch (err) {
      return 'failed';
    }
  }
}
