import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserCharacter } from './entity/userCharacter.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserCharacter)
    private userCharacterRepository: Repository<UserCharacter>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserCharacterById(userId: number): Promise<UserCharacter[]> {
    return this.userCharacterRepository.find({
      where: {
        employerid: userId,
      },
    });
  }
}
