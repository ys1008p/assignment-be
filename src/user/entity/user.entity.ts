// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp with time zone' })
  createat: Date;

  @Column({ type: 'timestamp with time zone' })
  updateat: Date;

  @Column({ type: 'uuid' })
  uuid: string;

  @Column({ type: 'varchar' })
  userid: string;
}