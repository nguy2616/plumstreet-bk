import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { NotFoundException } from '../../utils/notFound.exception';
import { MenuItem } from '../menu-items/entities/menu-item.entity';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menu)
    private menusRepository: Repository<Menu>,
    @InjectRepository(MenuItem)
    private menuItemsRepository: Repository<MenuItem>,
  ) {}
  async create(createMenuDto: CreateMenuDto) {
    const newMenu = await this.menusRepository.create({
      ...createMenuDto,
      isStandard: createMenuDto.isStandard ? createMenuDto.isStandard : true,
      company: createMenuDto.company,
      cuisine_types: createMenuDto.cuisine_types
        ? createMenuDto.cuisine_types
        : [],
      special_diets: createMenuDto.special_diets
        ? createMenuDto.special_diets
        : [],
    });
    await this.menusRepository.save(newMenu);
    return newMenu;
  }

  async findAll() {
    return await this.menusRepository.find({
      relations: ['menu_items'],
    });
  }

  async findOne(id: number) {
    const menu = await this.menusRepository.findOne(id, {
      relations: ['menu_items'],
    });
    if (menu) {
      return menu;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateMenuDto: any) {
    updateMenuDto.id = Number(id);
    const update = await this.menusRepository.save(updateMenuDto);
    if (update) {
      const menu = await this.findOne(id);
      return menu;
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    const menu = await this.findOne(id);
    if (menu.menu_items.length > 0) {
      await this.deleteItems(menu);
      await this.menusRepository.delete(id);
      return `deleted ${id}`;
    } else {
      await this.menusRepository.delete(id);
    }
    throw new NotFoundException(id);
  }

  private async deleteItems(menu: any) {
    menu.menu_items.forEach(async (item) => {
      await this.menuItemsRepository.delete(item.id);
    });
    return menu;
  }
}
