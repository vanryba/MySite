import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseEntity } from './entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { FileEntity } from 'src/files/entities/file.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private repository: Repository<CourseEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}
  async create(createCourseDto: CreateCourseDto) {
    const { title, desc, category, ownerId, imageId, published, users } =
      createCourseDto;
    const owner = await this.userRepository.findOneBy({ id: ownerId });
    const image = await this.fileRepository.findOneBy({ id: imageId });
    const newList = new CourseEntity();
    newList.desc = desc;
    newList.title = title;
    newList.category = category;
    newList.owner = owner;
    newList.img = image;
    newList.published = published;
    newList.users = users;

    return this.repository.save(newList);
  }

  findAll() {
    return this.repository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.img', 'image')
      .addSelect('owner.id')
      .leftJoin('course.owner', 'owner')
      .leftJoinAndSelect('course.modules', 'module')
      .leftJoinAndSelect('module.lessons', 'lessons')
      .getMany();
  }
  findPublished() {
    return this.repository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.img', 'image')
      .addSelect('owner.id')
      .leftJoin('course.owner', 'owner')
      .leftJoinAndSelect('course.modules', 'module')
      .leftJoinAndSelect('module.lessons', 'lessons')
      .where('course.published = :published', { published: true })
      .getMany();
  }
  findOwner(id: number) {
    return this.repository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.img', 'image')
      .addSelect('owner.id')
      .leftJoin('course.owner', 'owner')
      .leftJoinAndSelect('course.modules', 'module')
      .leftJoinAndSelect('module.lessons', 'lessons')
      .where('course.owner = :id', { id })
      .getMany();
  }
  findOne(id: number) {
    return this.repository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.img', 'image')
      .addSelect('owner.id')
      .leftJoin('course.owner', 'owner')
      .leftJoinAndSelect('course.modules', 'module')
      .leftJoinAndSelect('module.lessons', 'lessons')
      .leftJoinAndSelect('module.quiz', 'quiz')
      .where('course.id = :id', { id })
      .getOne();
  }
  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const list = await this.repository.findOne({ where: { id: id } });
    const { imageId, ...rest } = updateCourseDto;

    if (imageId) {
      const image = await this.fileRepository.findOne({
        where: { id: imageId },
      });
      list.img = image;
    }

    Object.assign(list, rest);

    return this.repository.save(list);
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
