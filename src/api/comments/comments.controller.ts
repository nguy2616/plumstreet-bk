import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import jwtGuard from '../../auth/guard/jwt.guard';

import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @UseGuards(jwtGuard)
  async create(@Body() createCommentDto: CreateCommentDto, @Request() req) {
    try {
      return this.commentsService.create(createCommentDto, req.user.id);
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.commentsService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  @UseGuards(jwtGuard)
  async findOne(@Param('id') id: string) {
    try {
      return await this.commentsService.findOne(+id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(jwtGuard)
  async update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    try {
      return await this.commentsService.update(+id, updateCommentDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  async remove(@Param('id') id: string) {
    try {
      return await this.commentsService.remove(+id);
    } catch (error) {
      return error;
    }
  }
}
