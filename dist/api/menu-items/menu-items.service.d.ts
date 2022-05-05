import { Repository } from 'typeorm';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { MenuItem } from './entities/menu-item.entity';
export declare class MenuItemsService {
    private menuItemsRepository;
    constructor(menuItemsRepository: Repository<MenuItem>);
    create(createMenuItemDto: CreateMenuItemDto): Promise<MenuItem>;
    findAll(): Promise<MenuItem[]>;
    findOne(id: number): Promise<MenuItem>;
    update(id: number, updateMenuItemDto: any): Promise<MenuItem>;
    remove(id: number): Promise<string>;
}
