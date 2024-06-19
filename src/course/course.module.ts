import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { ModuleEntity } from 'src/module/entities/module.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from 'src/files/entities/file.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { CourseEntity } from './entities/course.entity';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  imports: [
    TypeOrmModule.forFeature([
      ModuleEntity,
      FileEntity,
      UserEntity,
      CourseEntity,
    ]),
  ],
})
export class CourseModule {}
