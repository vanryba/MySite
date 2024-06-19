import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestEntity } from './entities/request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(RequestEntity)
    private repository: Repository<RequestEntity>,
  ) {}
  create(createRequestDto: CreateRequestDto) {
    const { org, about, user } = createRequestDto;

    const newList = new RequestEntity();
    newList.org = org;
    newList.about = about;
    newList.user = user;
    return this.repository.save(newList);
  }

  findAll() {
    return `This action returns all request`;
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
