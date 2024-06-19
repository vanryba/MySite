import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { FileEntity } from 'src/files/entities/file.entity';
import { CourseEntity } from 'src/course/entities/course.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([UserEntity, FileEntity, CourseEntity])],
  exports: [UsersService],
})
export class UsersModule {}
