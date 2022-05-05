import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { NotFoundException } from '../../utils/notFound.exception';
import { CreateLegalFormDto } from './dto/create-legal-form.dto';
import { UpdateLegalFormDto } from './dto/update-legal-form.dto';
import { LegalForm } from './entities/legal-form.entity';

@Injectable()
export class LegalFormsService {
  constructor(
    @InjectRepository(LegalForm)
    private legalFormsRepository: Repository<LegalForm>,
  ) {}

  async create(createLegalFormDto: CreateLegalFormDto) {
    const legalForm = await this.legalFormsRepository.create(
      createLegalFormDto,
    );
    await this.legalFormsRepository.save(legalForm);
    return legalForm;
  }

  async findAll() {
    return await this.legalFormsRepository.find();
  }

  async findOne(id: number) {
    const legalForm = await this.legalFormsRepository.findOne(id);
    if (legalForm) {
      return legalForm;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateLegalFormDto: UpdateLegalFormDto) {
    const updated = await this.legalFormsRepository.update(
      id,
      updateLegalFormDto,
    );
    if (updated) {
      return await this.findOne(id);
    } else {
      throw new NotFoundException(id);
    }
  }

  async remove(id: number) {
    const del = await this.legalFormsRepository.delete(id);
    if (del) {
      return del;
    } else {
      throw new NotFoundException(id);
    }
  }
}
