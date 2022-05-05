import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFoodtruckDto } from './dto/create-foodtruck.dto';
import { Foodtruck } from './entities/foodtruck.entity';

@Injectable()
export class FoodtrucksService {
  constructor(
    @InjectRepository(Foodtruck)
    private foodtrucksRepository: Repository<Foodtruck>,
  ) {}

  async create(createFoodtruckDto: CreateFoodtruckDto) {
    const ft = await this.foodtrucksRepository.create({
      ...createFoodtruckDto,
      company: createFoodtruckDto.company,
    });
    if (ft) {
      await this.foodtrucksRepository.save(ft);
    }
    return ft;
  }

  async findAll() {
    const fts = await this.foodtrucksRepository.find();
    return fts;
  }

  async findOne(id: number) {
    const ft = await this.foodtrucksRepository.findOne(id);
    if (ft) {
      return ft;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateFoodtruckDto: any) {
    updateFoodtruckDto.id = Number(id);
    const update = await this.foodtrucksRepository.save(updateFoodtruckDto);
    if (update) {
      return await this.findOne(id);
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    if (await this.foodtrucksRepository.delete(id)) {
      return `Deleted ${id}`;
    }
    throw new NotFoundException(id);
  }
}
