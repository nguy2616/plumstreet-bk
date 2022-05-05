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
import { MenuItemsService } from './menu-items.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import jwtGuard from '../../auth/guard/jwt.guard';

@Controller('menu-items')
export class MenuItemsController {
  constructor(private readonly menuItemsService: MenuItemsService) {}

  @Post()
  @UseGuards(jwtGuard)
  create(@Body() createMenuItemDto: CreateMenuItemDto) {
    try {
      return this.menuItemsService.create(createMenuItemDto);
    } catch (error) {
      return error;
    }
  }

  @Get()
  findAll() {
    try {
      return this.menuItemsService.findAll();
    } catch (error) {}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.menuItemsService.findOne(+id);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(jwtGuard)
  update(
    @Param('id') id: string,
    @Body() updateMenuItemDto: UpdateMenuItemDto,
  ) {
    try {
      return this.menuItemsService.update(+id, updateMenuItemDto);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(jwtGuard)
  remove(@Param('id') id: string) {
    try {
      return this.menuItemsService.remove(+id);
    } catch (error) {
      return error;
    }
  }
}
