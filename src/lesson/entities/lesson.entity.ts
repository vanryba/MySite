import { ModuleEntity } from 'src/module/entities/module.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('lesson')
export class LessonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => ModuleEntity, (module) => module.lessons)
  module: ModuleEntity;
}
