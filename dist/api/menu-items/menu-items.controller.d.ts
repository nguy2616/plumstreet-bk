import { MenuItemsService } from './menu-items.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
export declare class MenuItemsController {
    private readonly menuItemsService;
    constructor(menuItemsService: MenuItemsService);
    create(createMenuItemDto: CreateMenuItemDto): any;
    findAll(): Promise<import("./entities/menu-item.entity").MenuItem[]>;
    findOne(id: string): any;
    update(id: string, updateMenuItemDto: UpdateMenuItemDto): any;
    remove(id: string): any;
}
