import { Repository } from 'typeorm';
import { MenuItem } from '../menu-items/entities/menu-item.entity';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';
export declare class MenusService {
    private menusRepository;
    private menuItemsRepository;
    constructor(menusRepository: Repository<Menu>, menuItemsRepository: Repository<MenuItem>);
    create(createMenuDto: CreateMenuDto): Promise<Menu>;
    findAll(): Promise<Menu[]>;
    findOne(id: number): Promise<Menu>;
    update(id: number, updateMenuDto: any): Promise<Menu>;
    remove(id: number): Promise<string>;
    private deleteItems;
}
