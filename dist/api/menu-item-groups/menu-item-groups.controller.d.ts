import { MenuItemGroupsService } from './menu-item-groups.service';
import { CreateMenuItemGroupDto } from './dto/create-menu-item-group.dto';
import { UpdateMenuItemGroupDto } from './dto/update-menu-item-group.dto';
export declare class MenuItemGroupsController {
    private readonly menuItemGroupsService;
    constructor(menuItemGroupsService: MenuItemGroupsService);
    create(createMenuItemGroupDto: CreateMenuItemGroupDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateMenuItemGroupDto: UpdateMenuItemGroupDto): Promise<any>;
    remove(id: string): Promise<any>;
}
