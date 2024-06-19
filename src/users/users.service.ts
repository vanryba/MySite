import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileEntity } from 'src/files/entities/file.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}

  async findById(id) {
    return this.repository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .leftJoinAndSelect('user.avatar', 'file')
      .getOne();
  }
  async findByEmail(email) {
    return this.repository.findOneBy({ email });
  }
  async create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }
  async findUserByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.repository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User with id ${email} not found.`);
    }
    return user;
  }
  async findAll() {
    return this.repository.find();
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }
    Object.assign(user, updateUserDto);

    return this.repository.save(user);
  }
}
