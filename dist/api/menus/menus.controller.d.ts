import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenusController {
    private readonly menusService;
    constructor(menusService: MenusService);
    create(createMenuDto: CreateMenuDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateMenuDto: UpdateMenuDto): Promise<any>;
    remove(id: string): Promise<any>;
}
