import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { NotFoundException } from '../../utils/notFound.exception';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { MenuItem } from './entities/menu-item.entity';

@Injectable()
export class MenuItemsService {
  constructor(
    @InjectRepository(MenuItem)
    private menuItemsRepository: Repository<MenuItem>,
  ) {}

  async create(createMenuItemDto: CreateMenuItemDto) {
    const menuItem = await this.menuItemsRepository.create({
      ...createMenuItemDto,
      menu_item_group: createMenuItemDto.menu_item_group,
      menu: createMenuItemDto.menu,
      cuisine_types: createMenuItemDto.cuisine_types
        ? createMenuItemDto.cuisine_types
        : [],
      special_diets: createMenuItemDto.special_diets
        ? createMenuItemDto.special_diets
        : [],
    });
    await this.menuItemsRepository.save(menuItem);
    menuItem.price = Number(menuItem.price).toFixed(2);
    return menuItem;
  }

  async findAll() {
    const menuItems = await this.menuItemsRepository.find({
      relations: ['menu'],
    });
    menuItems.forEach((item) => {
      item.menu = item.menu.id;
      item.price = Number(item.price).toFixed(2);
    });
    return menuItems;
  }

  async findOne(id: number) {
    const menuItem = await this.menuItemsRepository.findOne(id, {
      relations: ['menu'],
    });
    if (menuItem) {
      menuItem.menu = menuItem.menu.id;
      menuItem.price = Number(menuItem.price).toFixed(2);
      return menuItem;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateMenuItemDto: any) {
    updateMenuItemDto.id = Number(id);
    const updated = await this.menuItemsRepository.save(updateMenuItemDto);
    if (updated) {
      return await this.findOne(id);
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    if (await this.menuItemsRepository.delete(id)) {
      return `successfully deleted id ${id}`;
    }
    throw new NotFoundException(id);
  }
}
