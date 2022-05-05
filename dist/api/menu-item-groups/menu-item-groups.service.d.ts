import { Repository } from 'typeorm';
import { CreateMenuItemGroupDto } from './dto/create-menu-item-group.dto';
import { UpdateMenuItemGroupDto } from './dto/update-menu-item-group.dto';
import { MenuItemGroup } from './entities/menu-item-group.entity';
export declare class MenuItemGroupsService {
    private menuItemGroupsRepository;
    constructor(menuItemGroupsRepository: Repository<MenuItemGroup>);
    create(createMenuItemGroupDto: CreateMenuItemGroupDto): Promise<MenuItemGroup>;
    findAll(): Promise<MenuItemGroup[]>;
    findOne(id: number): Promise<MenuItemGroup>;
    update(id: number, updateMenuItemGroupDto: UpdateMenuItemGroupDto): Promise<MenuItemGroup>;
    remove(id: number): Promise<string>;
}
