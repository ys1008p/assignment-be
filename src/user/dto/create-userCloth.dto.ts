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
  @IsNotEmpty()
  characteruid: bigint;

  @IsBoolean()
  @IsOptional()
  isequiped?: boolean;

  @IsInt()
  @IsOptional()
  isstatus?: number;

  @IsInt()
  @IsNotEmpty()
  clothno: bigint;

  @IsInt()
  @IsNotEmpty()
  channel: number;

  @IsBoolean()
  @IsOptional()
  isgenerated?: boolean;

  @IsBoolean()
  @IsOptional()
  islock?: boolean;
}
