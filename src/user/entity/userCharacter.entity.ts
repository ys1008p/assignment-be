import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
