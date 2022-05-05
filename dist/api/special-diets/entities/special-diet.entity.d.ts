import { Genetic } from '../../../utils/genetic.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Menu } from '../../menus/entities/menu.entity';
export declare class SpecialDiet extends Genetic {
    id: number;
    name: string;
    menus: Menu[];
    menu_items: MenuItem[];
}
