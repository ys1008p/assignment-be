import { Module } from '@nestjs/common';
import { ExcelController } from './excel.controller';
import { ExcelService } from './excel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcelBaller } from './entity/excelBaller.entity';
import { ExcelCloth } from './entity/excelCloth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExcelBaller, ExcelCloth])],
  controllers: [ExcelController],
  providers: [ExcelService],
})
export class ExcelModule {}
