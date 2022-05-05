import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { FilesService } from '../files/files.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { NotFoundException } from '../../utils/notFound.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly filesSerivce: FilesService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create({
      ...createUserDto,
      role: createUserDto.role ? createUserDto.role : { id: 2 },
      company: createUserDto.company ? createUserDto.company : null,
      events: createUserDto.events ? createUserDto.events : [],
    });
    await this.hasedPw(newUser);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    } else {
      throw new NotFoundException(email);
    }
  }

  async findAll() {
    const users = await this.usersRepository.find();
    users.forEach((user) => {
      user.password = undefined;
    });
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne(id, {
      relations: ['events'],
    });
    if (user) {
      user.password = undefined;
      return user;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateUserDto: any) {
    updateUserDto.id = Number(id);
    await this.hasedPw(updateUserDto);
    const update = await this.usersRepository.save(updateUserDto);
    if (update) {
      const user = await this.findOne(id);
      return user;
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    if (await this.usersRepository.delete(id)) {
      return `deleted ${id}`;
    }
    throw new NotFoundException(id);
  }

  async addAvatar(id: number, imageBuffer: Buffer, filename: string) {
    const user = await this.deleteAvatar(id);
    const avatar = await this.filesSerivce.uploadFile(imageBuffer, filename);
    await this.usersRepository.update(id, {
      ...user,
      avatar,
    });
    return avatar;
  }

  async deleteAvatar(id: number) {
    const user = await this.usersRepository.findOne(id);
    if (user.avatar) {
      await this.usersRepository.update(id, {
        ...user,
        avatar: null,
      });
      await this.filesSerivce.remove(user.avatar.id);
    }
    return user;
  }

  private async hasedPw(user: any) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return hashedPassword;
  }
}
