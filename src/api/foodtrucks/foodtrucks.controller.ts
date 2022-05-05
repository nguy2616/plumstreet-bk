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
import { FoodtrucksService } from './foodtrucks.service';
import { CreateFoodtruckDto } from './dto/create-foodtruck.dto';
import { UpdateFoodtruckDto } from './dto/update-foodtruck.dto';
import jwtGuard from '../../auth/guard/jwt.guard';

@Controller('foodtrucks')
export class FoodtrucksController {
  constructor(private readonly foodtrucksService: FoodtrucksService) {}

  @Post()
  @UseGuards(jwtGuard)
  create(@Body() createFoodtruckDto: CreateFoodtruckDto) {
    try {
      return this.foodtrucksService.create(createFoodtruckDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  findAll() {
    try {
      return this.foodtrucksService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.foodtrucksService.findOne(+id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(jwtGuard)
  update(
    @Param('id') id: string,
    @Body() updateFoodtruckDto: UpdateFoodtruckDto,
  ) {
    try {
      return this.foodtrucksService.update(+id, updateFoodtruckDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  remove(@Param('id') id: string) {
    try {
      return this.foodtrucksService.remove(+id);
    } catch (error) {
      return error;
    }
  }
}
