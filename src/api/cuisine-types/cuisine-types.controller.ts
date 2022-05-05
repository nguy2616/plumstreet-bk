import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import jwtGuard from '../../auth/guard/jwt.guard';
import { CuisineTypesService } from './cuisine-types.service';
import { CreateCuisineTypeDto } from './dto/create-cuisine-type.dto';
import { UpdateCuisineTypeDto } from './dto/update-cuisine-type.dto';

@Controller('cuisine-types')
export class CuisineTypesController {
  constructor(private readonly cuisineTypesService: CuisineTypesService) {}

  @Post()
  @UseGuards(jwtGuard)
  create(@Body() createCuisineTypeDto: CreateCuisineTypeDto) {
    try {
      return this.cuisineTypesService.create(createCuisineTypeDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.cuisineTypesService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.cuisineTypesService.findOne(+id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCuisineTypeDto: UpdateCuisineTypeDto,
  ) {
    try {
      return await this.cuisineTypesService.update(+id, updateCuisineTypeDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  async remove(@Param('id') id: string) {
    try {
      return await this.cuisineTypesService.remove(+id);
    } catch (error) {
      return error;
    }
  }
}
