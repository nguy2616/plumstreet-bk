import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { NotFoundException } from '../../utils/notFound.exception';
import { CreateSpecialDietDto } from './dto/create-special-diet.dto';
import { UpdateSpecialDietDto } from './dto/update-special-diet.dto';
import { SpecialDiet } from './entities/special-diet.entity';

@Injectable()
export class SpecialDietsService {
  constructor(
    @InjectRepository(SpecialDiet)
    private specialDietsRepository: Repository<SpecialDiet>,
  ) {}
  async create(createSpecialDietDto: CreateSpecialDietDto) {
    const cs = await this.specialDietsRepository.create(createSpecialDietDto);
    if (cs) {
      await this.specialDietsRepository.save(cs);
      return cs;
    }
  }

  async findAll() {
    const specialdiets = await this.specialDietsRepository.find();
    return specialdiets;
  }

  async findOne(id: number) {
    const cs = await this.specialDietsRepository.findOne(id);
    if (cs) {
      return cs;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateSpecialDietDto: UpdateSpecialDietDto) {
    const update = await this.specialDietsRepository.update(
      id,
      updateSpecialDietDto,
    );
    if (update) {
      return await this.findOne(id);
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    if (await this.specialDietsRepository.delete(id)) {
      return `This action removes a #${id} specialDiet`;
    }
    throw new NotFoundException(id);
  }
}
