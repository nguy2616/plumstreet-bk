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

import { ClientEventService } from './client-event.service';
import { CreateClientEventDto } from './dto/create-client-event.dto';
import { UpdateClientEventDto } from './dto/update-client-event.dto';

@Controller('client-events')
export class ClientEventController {
  constructor(private readonly clientEventService: ClientEventService) {}

  @Post()
  async create(@Body() createClientEventDto: CreateClientEventDto) {
    try {
      return await this.clientEventService.create(createClientEventDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  @UseGuards(jwtGuard)
  async findAll() {
    try {
      return this.clientEventService.findAll();
    } catch (error) {}
  }

  @Get(':id')
  @UseGuards(jwtGuard)
  async findOne(@Param('id') id: string) {
    try {
      return this.clientEventService.findOne(+id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(jwtGuard)
  update(
    @Param('id') id: number,
    @Body() updateClientEventDto: UpdateClientEventDto,
  ) {
    try {
      return this.clientEventService.update(id, updateClientEventDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  async remove(@Param('id') id: string) {
    try {
      return this.clientEventService.remove(+id);
    } catch (error) {
      return error;
    }
  }
}
