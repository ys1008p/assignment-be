import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserCharacter } from './entity/userCharacter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserCharacter])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
