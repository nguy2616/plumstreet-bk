import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '../../utils/notFound.exception';
import { CreateClientEventDto } from './dto/create-client-event.dto';
import { ClientEvent } from './entities/client-event.entity';

@Injectable()
export class ClientEventService {
  constructor(
    @InjectRepository(ClientEvent)
    private eventsRepository: Repository<ClientEvent>,
  ) {}
  async create(createClientEventDto: CreateClientEventDto) {
    const ev = await this.eventsRepository.create({
      ...createClientEventDto,
      event_type: createClientEventDto.event_type,
      cuisine_types: createClientEventDto.cuisine_types
        ? createClientEventDto.cuisine_types
        : [],
      client: createClientEventDto.client,
      services: createClientEventDto.services,
      offers: createClientEventDto.offers,
      fav_menus: createClientEventDto.fav_menus
        ? createClientEventDto.fav_menus
        : [],
      fav_menu_items: createClientEventDto.fav_menu_items
        ? createClientEventDto.fav_menu_items
        : [],
    });
    if (ev) {
      await this.eventsRepository.save(ev);
    }
    return ev;
  }

  async findAll() {
    const evs = await this.eventsRepository.find();
    return evs;
  }

  async findOne(id: number) {
    const ev = await this.eventsRepository.findOne(id);
    if (ev) {
      return ev;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateClientEventDto: any) {
    updateClientEventDto.id = Number(id);
    const update = await this.eventsRepository.save(updateClientEventDto);
    if (update) {
      const ev = await this.findOne(id);
      return ev;
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    if (await this.eventsRepository.delete(id)) {
      return `Delete event ${id} succesfully!`;
    }
    throw new NotFoundException(id);
  }
}
