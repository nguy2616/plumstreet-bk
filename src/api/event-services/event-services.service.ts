import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { NotFoundException } from '../../utils/notFound.exception';
import { CreateEventServiceDto } from './dto/create-event-service.dto';
import { UpdateEventServiceDto } from './dto/update-event-service.dto';
import { EventService } from './entities/event-service.entity';

@Injectable()
export class EventServicesService {
  constructor(
    @InjectRepository(EventService)
    private eventServicesRepository: Repository<EventService>,
  ) {}
  async create(createEventServiceDto: CreateEventServiceDto) {
    const cs = await this.eventServicesRepository.create(createEventServiceDto);
    if (cs) {
      await this.eventServicesRepository.save(cs);
      return cs;
    }
  }

  async findAll() {
    const eventservices = await this.eventServicesRepository.find();
    return eventservices;
  }

  async findOne(id: number) {
    const cs = await this.eventServicesRepository.findOne(id);
    if (cs) {
      return cs;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateEventServiceDto: UpdateEventServiceDto) {
    const update = await this.eventServicesRepository.update(
      id,
      updateEventServiceDto,
    );
    if (update) {
      return await this.findOne(id);
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    if (await this.eventServicesRepository.delete(id)) {
      return `This action removes a #${id} eventService`;
    }
    throw new NotFoundException(id);
  }
}
