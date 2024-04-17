import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './user/entity/user.entity';

@Module({
  imports: [
    //환경변수를 사용하기 위해 npm i --save @nestjs/config 설치 후 ConfigModule.forRoof() 사용
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      logging: true,
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [UserEntity],
      synchronize: true,

      // 서버의 SSL 인증서를 신뢰할지 여부
      ssl: {
        rejectUnauthorized: false,
      },
    }),

    UserModule,
  ],
})
export class AppModule {}
