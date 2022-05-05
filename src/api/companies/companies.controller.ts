import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import jwtGuard from '../../auth/guard/jwt.guard';
import { ExceptionsLoggerFilter } from '../../utils/exceptionsLogger.filter';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @UseGuards(jwtGuard)
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    try {
      return await this.companiesService.create(createCompanyDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  @UseGuards(jwtGuard)
  async findAll() {
    try {
      return await this.companiesService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  @UseGuards(jwtGuard)
  @UseFilters(ExceptionsLoggerFilter)
  async findOne(@Param('id') id: string) {
    try {
      return await this.companiesService.findOne(+id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(jwtGuard)
  async update(
    @Param('id') id: number,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    try {
      return await this.companiesService.update(id, updateCompanyDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  async remove(@Param('id') id: number) {
    try {
      return await this.companiesService.remove(id);
    } catch (error) {
      return error;
    }
  }
}
