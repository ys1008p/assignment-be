import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

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
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      //synchronize true 이면, db 스키마 변경됨
      synchronize: false,

      // 서버의 SSL 인증서를 신뢰할지 여부
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    UserModule,
  ],
})
export class AppModule {}
