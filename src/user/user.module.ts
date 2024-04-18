import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserCharacter } from './entity/userCharacter.entity';
import { UserClothCustom } from './entity/userCloth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserCharacter, UserClothCustom])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
