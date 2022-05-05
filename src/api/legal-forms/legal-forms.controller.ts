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
import { LegalFormsService } from './legal-forms.service';
import { CreateLegalFormDto } from './dto/create-legal-form.dto';
import { UpdateLegalFormDto } from './dto/update-legal-form.dto';
import jwtGuard from '../../auth/guard/jwt.guard';

@Controller('legal-forms')
export class LegalFormsController {
  constructor(private readonly legalFormsService: LegalFormsService) {}

  @Post()
  @UseGuards(jwtGuard)
  async create(@Body() createLegalFormDto: CreateLegalFormDto) {
    try {
      return await this.legalFormsService.create(createLegalFormDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.legalFormsService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.legalFormsService.findOne(+id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(jwtGuard)
  async update(
    @Param('id') id: string,
    @Body() updateLegalFormDto: UpdateLegalFormDto,
  ) {
    try {
      return await this.legalFormsService.update(+id, updateLegalFormDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  async remove(@Param('id') id: string) {
    try {
      return await this.legalFormsService.remove(+id);
    } catch (error) {
      return error;
    }
  }
}
