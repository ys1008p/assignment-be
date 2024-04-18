import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserCloth {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'timestamp with time zone' })
  createat: Date;

  @Column({ type: 'timestamp with time zone' })
  updateat: Date;

  @Column({ type: 'bigint' })
  employerid: number;

  @Column({ type: 'bigint' })
  characteruid: number;

  @Column({ type: 'boolean' })
  isequiped: boolean;

  @Column({ type: 'integer' })
  isstatus: number;

  @Column({ type: 'bigint' })
  clothno: number;

  @Column({ type: 'integer' })
  channel: number;

  @Column({ type: 'boolean' })
  isgenerated: boolean;

  @Column({ type: 'boolean' })
  islock: boolean;
}
