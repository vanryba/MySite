import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quiz')
export class QuizEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('json', { nullable: true })
  questions: any[];

  @Column('simple-array', { nullable: true })
  users: number[];
}
