import { CourseEntity } from 'src/course/entities/course.entity';
import { FileEntity } from 'src/files/entities/file.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  second_name: string;

  @Column()
  last_name: string;

  @Column()
  role: string;

  @OneToOne(() => FileEntity, { nullable: true })
  @JoinColumn()
  avatar: FileEntity;

  @OneToMany(() => CourseEntity, (course) => course.owner)
  courses_owner: CourseEntity[];
}
