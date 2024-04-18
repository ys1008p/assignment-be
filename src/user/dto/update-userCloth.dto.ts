import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class UpdateUserClothDto {
  @IsInt()
  @IsOptional()
  characteruid?: bigint;

  @IsBoolean()
  @IsOptional()
  isequiped?: boolean;

  @IsBoolean()
  @IsOptional()
  islock?: boolean;
}
