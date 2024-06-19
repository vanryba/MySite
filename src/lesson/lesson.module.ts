import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { LessonEntity } from './entities/lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleEntity } from 'src/module/entities/module.entity';

@Module({
  controllers: [LessonController],
  providers: [LessonService],
  imports: [TypeOrmModule.forFeature([ModuleEntity, LessonEntity])],
})
export class LessonModule {}
