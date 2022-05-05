import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';
import { Company } from '../../companies/entities/company.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Menu } from '../../menus/entities/menu.entity';
export declare class CuisineType extends Genetic {
    id: number;
    name: string;
    companies: Company[];
    menus: Menu[];
    menu_items: MenuItem[];
    events: ClientEvent[];
    isCheck: boolean;
}
