import { FileEntity } from 'src/files/entities/file.entity';
import { ModuleEntity } from 'src/module/entities/module.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity('course')
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  category: string;

  @Column()
  published: boolean;

  @Column('simple-array', { nullable: true })
  users: number[];

  @OneToOne(() => FileEntity, { nullable: true })
  @JoinColumn()
  img: FileEntity;

  @OneToMany(() => ModuleEntity, (module) => module.course)
  modules: ModuleEntity[];

  @ManyToOne(() => UserEntity, (user) => user.courses_owner)
  owner: UserEntity;
}
