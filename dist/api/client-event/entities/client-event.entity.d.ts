import { CuisineType } from '../../cuisine-types/entities/cuisine-type.entity';
import { EventService } from '../../event-services/entities/event-service.entity';
import { EventType } from '../../event-types/entities/event-type.entity';
import { MenuItemGroup } from '../../menu-item-groups/entities/menu-item-group.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';
export declare class ClientEvent {
    id: number;
    name: string;
    event_type: EventType;
    date: Date;
    budget: string;
    guests: number;
    location_name: string;
    other: string;
    cuisine_types: CuisineType[];
    client: User;
    services: EventService[];
    offers: MenuItemGroup[];
    fav_menus: Menu[];
    fav_menu_items: MenuItem[];
}
