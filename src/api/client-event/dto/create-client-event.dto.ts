import { IsNotEmpty, IsNumber } from 'class-validator';
import { CuisineType } from '../../cuisine-types/entities/cuisine-type.entity';
import { EventService } from '../../event-services/entities/event-service.entity';
import { EventType } from '../../event-types/entities/event-type.entity';
import { MenuItemGroup } from '../../menu-item-groups/entities/menu-item-group.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';

export class CreateClientEventDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  event_type: EventType;
  @IsNotEmpty()
  date: Date;
  @IsNotEmpty()
  budget: string;
  @IsNotEmpty()
  @IsNumber()
  guests: number;
  @IsNotEmpty()
  location_name: string;
  other: string;
  cuisine_types: CuisineType[];
  @IsNotEmpty()
  client: User;
  @IsNotEmpty()
  services: EventService[];
  @IsNotEmpty()
  offers: MenuItemGroup[];
  fav_menus: Menu[];
  fav_menu_items: MenuItem[];
}
