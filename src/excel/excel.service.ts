import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExcelBaller } from './entity/excelBaller.entity';
import { ExcelCloth } from './entity/excelCloth.entity';

@Injectable()
export class ExcelService {
  constructor(
    @InjectRepository(ExcelBaller)
    private excelBallerRepository: Repository<ExcelBaller>,
    @InjectRepository(ExcelCloth)
    private excelClothRepository: Repository<ExcelCloth>,
  ) {}

  async getExcelClothByAbleCharacter(
    ablecharacter: number,
  ): Promise<ExcelCloth[]> {
    return await this.excelClothRepository.find({ where: { ablecharacter } });
  }
}
