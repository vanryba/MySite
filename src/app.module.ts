import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { UserEntity } from './users/entities/user.entity';
import { FileEntity } from './files/entities/file.entity';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { ModuleModule } from './module/module.module';
import { LessonModule } from './lesson/lesson.module';
import { CourseEntity } from './course/entities/course.entity';
import { ModuleEntity } from './module/entities/module.entity';
import { LessonEntity } from './lesson/entities/lesson.entity';
import { QuizModule } from './quiz/quiz.module';
import { QuizEntity } from './quiz/entities/quiz.entity';
import { RequestModule } from './request/request.module';
import { RequestEntity } from './request/entities/request.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_HOST) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        UserEntity,
        FileEntity,
        CourseEntity,
        ModuleEntity,
        LessonEntity,
        QuizEntity,
        RequestEntity,
      ],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    FilesModule,
    CourseModule,
    ModuleModule,
    LessonModule,
    QuizModule,
    RequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
