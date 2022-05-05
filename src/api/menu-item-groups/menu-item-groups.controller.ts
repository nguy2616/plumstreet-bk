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
import { MenuItemGroupsService } from './menu-item-groups.service';
import { CreateMenuItemGroupDto } from './dto/create-menu-item-group.dto';
import { UpdateMenuItemGroupDto } from './dto/update-menu-item-group.dto';
import jwtGuard from '../../auth/guard/jwt.guard';

@Controller('menu-item-groups')
export class MenuItemGroupsController {
  constructor(private readonly menuItemGroupsService: MenuItemGroupsService) {}

  @Post()
  @UseGuards(jwtGuard)
  async create(@Body() createMenuItemGroupDto: CreateMenuItemGroupDto) {
    try {
      return await this.menuItemGroupsService.create(createMenuItemGroupDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.menuItemGroupsService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.menuItemGroupsService.findOne(+id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(jwtGuard)
  async update(
    @Param('id') id: string,
    @Body() updateMenuItemGroupDto: UpdateMenuItemGroupDto,
  ) {
    try {
      return await this.menuItemGroupsService.update(
        +id,
        updateMenuItemGroupDto,
      );
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  async remove(@Param('id') id: string) {
    try {
      return await this.menuItemGroupsService.remove(+id);
    } catch (error) {
      return error;
    }
  }
}
