import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('request')
export class RequestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  about: string;

  @Column()
  user: number;

  @Column()
  org: string;
}
