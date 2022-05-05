import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { NotFoundException } from '../../utils/notFound.exception';
import { CreateCuisineTypeDto } from './dto/create-cuisine-type.dto';
import { UpdateCuisineTypeDto } from './dto/update-cuisine-type.dto';
import { CuisineType } from './entities/cuisine-type.entity';

@Injectable()
export class CuisineTypesService {
  constructor(
    @InjectRepository(CuisineType)
    private cuisineTypesRepository: Repository<CuisineType>,
  ) {}
  async create(createCuisineTypeDto: CreateCuisineTypeDto) {
    const cs = await this.cuisineTypesRepository.create(createCuisineTypeDto);
    if (cs) {
      await this.cuisineTypesRepository.save(cs);
      return cs;
    }
  }

  async findAll() {
    const cuisinetypes = await this.cuisineTypesRepository.find();
    return cuisinetypes;
  }

  async findOne(id: number) {
    const cs = await this.cuisineTypesRepository.findOne(id);
    if (cs) {
      return cs;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateCuisineTypeDto: UpdateCuisineTypeDto) {
    const update = await this.cuisineTypesRepository.update(
      id,
      updateCuisineTypeDto,
    );
    if (update) {
      return await this.findOne(id);
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    if (await this.cuisineTypesRepository.delete(id)) {
      return `This action removes a #${id} cuisineType`;
    }
    throw new NotFoundException(id);
  }
}
