import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleEntity } from 'src/module/entities/module.entity';
import { QuizEntity } from './entities/quiz.entity';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
  imports: [TypeOrmModule.forFeature([ModuleEntity, QuizEntity])],
})
export class QuizModule {}
