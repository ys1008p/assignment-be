import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExcelBaller {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  index: number;

  @Column({ type: 'timestamp' })
  createat: Date;

  @Column({ type: 'timestamp' })
  updateat: Date;

  @Column({ type: 'integer' })
  active: number;

  @Column({ type: 'integer' })
  initdeploy: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'bigint' })
  stat: number;

  @Column({ type: 'integer' })
  gender: number;

  @Column({ type: 'integer' })
  position: number;

  @Column({ type: 'integer' })
  rank: number;

  @Column({ type: 'varchar' })
  freestyle: string;
}
