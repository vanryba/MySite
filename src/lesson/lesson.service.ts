import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { LessonEntity } from './entities/lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleEntity } from 'src/module/entities/module.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private repository: Repository<LessonEntity>,
    @InjectRepository(ModuleEntity)
    private readonly moduleRepository: Repository<ModuleEntity>,
  ) {}
  async create(createLessonDto: CreateLessonDto) {
    const { title, content, moduleId } = createLessonDto;
    const module = await this.moduleRepository.findOneBy({ id: moduleId });
    const newList = new LessonEntity();
    newList.content = content;
    newList.title = title;
    newList.module = module;

    return this.repository.save(newList);
  }

  findAll() {
    return `This action returns all lesson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lesson`;
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.repository.findOneBy({ id });

    Object.assign(lesson, updateLessonDto);

    return this.repository.save(lesson);
  }
  remove(id: number) {
    return this.repository.delete(id);
  }
}
