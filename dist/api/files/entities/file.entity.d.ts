import { Genetic } from '../../../utils/genetic.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';
export declare class File extends Genetic {
    id: number;
    url: string;
    key: string;
    user: User;
    menu: Menu;
    menu_item: MenuItem;
}
