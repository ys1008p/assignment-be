import { Controller, Get, Param } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelCloth } from './entity/excelCloth.entity';

@Controller('api/excel')
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {}

  @Get('cloth')
  getAllCloth(): Promise<ExcelCloth[]> {
    return this.excelService.getAllExcelCloths();
  }

  @Get('cloth/:ableCharacter')
  getAbleCloth(
    @Param('ableCharacter') ableCharacter: number,
  ): Promise<ExcelCloth[]> {
    return this.excelService.getExcelClothByAbleCharacter(ableCharacter);
  }
}
