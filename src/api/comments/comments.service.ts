import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { NotFoundException } from '../../utils/notFound.exception';
import { User } from '../users/entities/user.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto, user: User) {
    const cmt = await this.commentsRepository.create({
      ...createCommentDto,
      menu: createCommentDto.menu,
      author: user,
    });
    await this.commentsRepository.save(cmt);
    return cmt;
  }

  async findAll() {
    return await this.commentsRepository.find();
  }

  async findOne(id: number) {
    const cmt = await this.commentsRepository.findOne(id);
    if (cmt) {
      return cmt;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const update = await this.commentsRepository.update(id, updateCommentDto);
    if (update) {
      return await this.findOne(id);
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    if (await this.commentsRepository.delete(id)) {
      return `delete ${id} succesfully`;
    }
    throw new NotFoundException(id);
  }
}
