import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from 'src/course/entities/course.entity';
import { ModuleEntity } from './entities/module.entity';
import { QuizEntity } from 'src/quiz/entities/quiz.entity';

@Module({
  controllers: [ModuleController],
  providers: [ModuleService],
  imports: [TypeOrmModule.forFeature([ModuleEntity, CourseEntity, QuizEntity])],
})
export class ModuleModule {}
