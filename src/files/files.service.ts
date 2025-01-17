import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  async create(file: Express.Multer.File) {
    const newFile = this.repository.create({
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
    });

    return this.repository.save(newFile);
  }
}
