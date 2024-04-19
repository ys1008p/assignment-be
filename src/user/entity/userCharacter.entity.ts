import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ExcelBaller } from '../../excel/entity/excelBaller.entity';

@Entity()
export class UserCharacter {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'timestamp with time zone' })
  createat: Date;

  @Column({ type: 'timestamp with time zone' })
  updateat: Date;

  @Column({ type: 'bigint' })
  characterindex: number;

  @Column({ type: 'bigint' })
  employerid: number;

  @Column({ type: 'smallint' })
  characterstatus: number;

  @Column({ type: 'varchar', nullable: true })
  etc: string | null;

  @ManyToOne(() => ExcelBaller)
  @JoinColumn({ name: 'characterindex', referencedColumnName: 'index' })
  excelBaller: ExcelBaller;
}
