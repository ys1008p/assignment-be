import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserClothDto {
  @IsInt()
  @IsNotEmpty()
  characteruid: bigint;

  @IsInt()
  @IsNotEmpty()
  employerid: bigint;

  @IsInt()
  @IsNotEmpty()
  clothno: bigint;

  @IsInt()
  @IsNotEmpty()
  channel: number;
}
