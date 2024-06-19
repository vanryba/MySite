import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ModuleEntity } from './entities/module.entity';
import { InjectRepository } from '@nestjs/typeorm';

import { CourseEntity } from 'src/course/entities/course.entity';
import { Repository } from 'typeorm';
import { LessonEntity } from 'src/lesson/entities/lesson.entity';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleEntity)
    private repository: Repository<ModuleEntity>,
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
  ) {}
  async create(createModuleDto: CreateModuleDto) {
    const { title, desc, courseId } = createModuleDto;
    const course = await this.courseRepository.findOne({
      where: { id: courseId },
    });
    const newList = new ModuleEntity();
    newList.desc = desc;
    newList.title = title;
    newList.course = course;

    return this.repository.save(newList);
  }
  findAll() {
    return `This action returns all module`;
  }

  findOne(id: number) {
    return this.repository
      .createQueryBuilder('module')
      .leftJoinAndSelect('module.lessons', 'lessons')
      .where('module.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateModuleDto: UpdateModuleDto) {
    const module = await this.repository.findOneBy({ id });

    Object.assign(module, updateModuleDto);

    return this.repository.save(module);
  }

  remove(id: number) {
    return this.repository.manager.transaction((manager) => {
      return manager
        .delete(LessonEntity, { module: { id } })
        .then(() => manager.delete(ModuleEntity, id));
    });
  }
}
