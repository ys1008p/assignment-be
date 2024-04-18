import { Controller, Get, Param } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelCloth } from './entity/excelCloth.entity';

@Controller('excel')
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {}

  @Get('cloth/:ableCharacter')
  getAbleCloth(
    @Param('ableCharacter') ableCharacter: number,
  ): Promise<ExcelCloth[]> {
    return this.excelService.getExcelClothByAbleCharacter(ableCharacter);
  }
}
