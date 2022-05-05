import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  Req,
  UploadedFile,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import jwtGuard from '../../auth/guard/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(jwtGuard)
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.usersService.create(createUserDto);
    } catch (error) {
      return error;
    }
  }

  @Get('/')
  async findAll() {
    try {
      return await this.usersService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  @UseGuards(jwtGuard)
  async findOne(@Param('id') id: number) {
    try {
      return await this.usersService.findOne(id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(jwtGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.usersService.update(+id, updateUserDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  remove(@Param('id') id: string) {
    try {
      return this.usersService.remove(+id);
    } catch (error) {
      return error;
    }
  }

  @Post('avatar')
  @UseGuards(jwtGuard)
  @UseInterceptors(FileInterceptor('file'))
  async addAvatar(@Req() req, @UploadedFile() file: Express.Multer.File) {
    try {
      return this.usersService.addAvatar(
        req.user.id,
        file.buffer,
        file.originalname,
      );
    } catch (error) {
      return error;
    }
  }
}
