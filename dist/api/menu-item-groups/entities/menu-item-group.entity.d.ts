import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
export declare class MenuItemGroup extends Genetic {
    id: number;
    name: string;
    menu_items: MenuItem[];
    events: ClientEvent[];
}
