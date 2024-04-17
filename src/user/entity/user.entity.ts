import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp with time zone' })
  createAt: Date;

  @Column({ type: 'timestamp with time zone' })
  updateAt: Date;

  @Column({ type: 'uuid' })
  uuid: string;

  @Column({ type: 'varchar' })
  userId: string;
}