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
import { SpecialDietsService } from './special-diets.service';
import { CreateSpecialDietDto } from './dto/create-special-diet.dto';
import { UpdateSpecialDietDto } from './dto/update-special-diet.dto';
import jwtGuard from '../../auth/guard/jwt.guard';

@Controller('special-diets')
export class SpecialDietsController {
  constructor(private readonly specialDietsService: SpecialDietsService) {}

  @Post()
  @UseGuards(jwtGuard)
  async create(@Body() createSpecialDietDto: CreateSpecialDietDto) {
    try {
      return await this.specialDietsService.create(createSpecialDietDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.specialDietsService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.specialDietsService.findOne(+id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(jwtGuard)
  async update(
    @Param('id') id: string,
    @Body() updateSpecialDietDto: UpdateSpecialDietDto,
  ) {
    try {
      return await this.specialDietsService.update(+id, updateSpecialDietDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  async remove(@Param('id') id: string) {
    try {
      return await this.specialDietsService.remove(+id);
    } catch (error) {
      return error;
    }
  }
}
