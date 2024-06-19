import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizEntity } from './entities/quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModuleEntity } from 'src/module/entities/module.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizEntity)
    private repository: Repository<QuizEntity>,
    @InjectRepository(ModuleEntity)
    private readonly moduleRepository: Repository<ModuleEntity>,
  ) {}
  async create(createModuleDto: CreateQuizDto) {
    const { title, questions, users } = createModuleDto;

    const newList = new QuizEntity();
    newList.questions = questions;
    newList.title = title;
    newList.users = users;

    return this.repository.save(newList);
  }

  findAll() {
    return `This action returns all quiz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quiz`;
  }

  async update(id: number, updateQuizDto: UpdateQuizDto) {
    const quiz = await this.repository.findOneBy({ id });

    Object.assign(quiz, updateQuizDto);

    return this.repository.save(quiz);
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
