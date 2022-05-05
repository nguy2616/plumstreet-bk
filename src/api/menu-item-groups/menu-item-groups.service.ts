import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { NotFoundException } from '../../utils/notFound.exception';
import { CreateMenuItemGroupDto } from './dto/create-menu-item-group.dto';
import { UpdateMenuItemGroupDto } from './dto/update-menu-item-group.dto';
import { MenuItemGroup } from './entities/menu-item-group.entity';

@Injectable()
export class MenuItemGroupsService {
  constructor(
    @InjectRepository(MenuItemGroup)
    private menuItemGroupsRepository: Repository<MenuItemGroup>,
  ) {}

  async create(createMenuItemGroupDto: CreateMenuItemGroupDto) {
    const newMenuGroup = await this.menuItemGroupsRepository.create(
      createMenuItemGroupDto,
    );
    await this.menuItemGroupsRepository.save(newMenuGroup);
    return newMenuGroup;
  }

  async findAll() {
    return await this.menuItemGroupsRepository.find();
  }

  async findOne(id: number) {
    const menuGroup = await this.menuItemGroupsRepository.findOne(id);
    if (menuGroup) {
      return menuGroup;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateMenuItemGroupDto: UpdateMenuItemGroupDto) {
    const update = await this.menuItemGroupsRepository.update(
      id,
      updateMenuItemGroupDto,
    );
    if (update) {
      const menuGroup = await this.findOne(id);
      return menuGroup;
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    if (await this.menuItemGroupsRepository.delete(id)) {
      return `Delete successfully id ${id}`;
    }
    throw new NotFoundException(id);
  }
}
