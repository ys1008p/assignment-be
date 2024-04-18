import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateUserClothDto {
  id: bigint;

  @IsDate()
  @IsOptional()
  createat?: Date;

  @IsDate()
  @IsOptional()
  updateat?: Date;

  @IsInt()
  @IsNotEmpty()
  employerid: bigint;

  @IsInt()
  @IsOptional()
  characteruid?: bigint;

  @IsBoolean()
  @IsOptional()
  isequiped?: boolean;

  @IsInt()
  @IsOptional()
  isstatus?: number;

  @IsInt()
  @IsOptional()
  clothno?: bigint;

  @IsInt()
  @IsOptional()
  channel?: number;

  @IsBoolean()
  @IsOptional()
  isgenerated?: boolean;

  @IsBoolean()
  @IsOptional()
  islock?: boolean;
}
