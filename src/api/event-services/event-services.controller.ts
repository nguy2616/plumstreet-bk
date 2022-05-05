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
import { EventServicesService } from './event-services.service';
import { CreateEventServiceDto } from './dto/create-event-service.dto';
import { UpdateEventServiceDto } from './dto/update-event-service.dto';

@Controller('event-services')
export class EventServicesController {
  constructor(private readonly eventServicesService: EventServicesService) {}

  @Post()
  create(@Body() createEventServiceDto: CreateEventServiceDto) {
    try {
      return this.eventServicesService.create(createEventServiceDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.eventServicesService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.eventServicesService.findOne(+id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(jwtGuard)
  async update(
    @Param('id') id: string,
    @Body() updateEventServiceDto: UpdateEventServiceDto,
  ) {
    try {
      return await this.eventServicesService.update(+id, updateEventServiceDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  async remove(@Param('id') id: string) {
    try {
      return await this.eventServicesService.remove(+id);
    } catch (error) {
      return error;
    }
  }
}
