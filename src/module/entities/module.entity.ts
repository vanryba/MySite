import { CourseEntity } from 'src/course/entities/course.entity';
import { LessonEntity } from 'src/lesson/entities/lesson.entity';
import { QuizEntity } from 'src/quiz/entities/quiz.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('module')
export class ModuleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @ManyToOne(() => CourseEntity, (course) => course.modules)
  course: CourseEntity;

  @OneToMany(() => LessonEntity, (lesson) => lesson.module, { cascade: true })
  lessons: LessonEntity[];

  @OneToOne(() => QuizEntity, { nullable: true })
  @JoinColumn()
  quiz: QuizEntity;
}
