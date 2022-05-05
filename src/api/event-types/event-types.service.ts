import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { NotFoundException } from '../../utils/notFound.exception';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
import { EventType } from './entities/event-type.entity';

@Injectable()
export class EventTypesService {
  constructor(
    @InjectRepository(EventType)
    private eventTypesRepository: Repository<EventType>,
  ) {}
  async create(createEventTypeDto: CreateEventTypeDto) {
    const cs = await this.eventTypesRepository.create(createEventTypeDto);
    if (cs) {
      await this.eventTypesRepository.save(cs);
      return cs;
    }
  }

  async findAll() {
    const eventtypes = await this.eventTypesRepository.find();
    return eventtypes;
  }

  async findOne(id: number) {
    const cs = await this.eventTypesRepository.findOne(id);
    if (cs) {
      return cs;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    const update = await this.eventTypesRepository.update(
      id,
      updateEventTypeDto,
    );
    if (update) {
      return await this.findOne(id);
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    if (await this.eventTypesRepository.delete(id)) {
      return `This action removes a #${id} eventType`;
    }
    throw new NotFoundException(id);
  }
}
