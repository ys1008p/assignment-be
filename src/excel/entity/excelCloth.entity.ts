import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExcelCloth {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  index: number;

  @Column({ type: 'timestamp' })
  createat: Date;

  @Column({ type: 'timestamp' })
  updateat: Date;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  textid: string;

  @Column({ type: 'integer' })
  use: number;

  @Column({ type: 'integer' })
  underware: number;

  @Column({ name: 'default', type: 'integer' })
  default: number;

  @Column({ name: 'startercloth', type: 'integer' })
  startercloth: number;

  @Column({ name: 'ablecharacter', type: 'integer' })
  ablecharacter: number;

  @Column({ type: 'integer' })
  cansell: number;

  @Column({ type: 'integer' })
  channel: number;

  @Column({ type: 'varchar' })
  slotcode: string;
}
