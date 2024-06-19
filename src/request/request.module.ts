import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { RequestEntity } from './entities/request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RequestController],
  providers: [RequestService],
  imports: [TypeOrmModule.forFeature([RequestEntity])],
})
export class RequestModule {}
