import { IsNotEmpty, IsNumber } from 'class-validator';
import { CuisineType } from 'src/api/cuisine-types/entities/cuisine-type.entity';
import { MenuItemGroup } from 'src/api/menu-item-groups/entities/menu-item-group.entity';
import { Menu } from 'src/api/menus/entities/menu.entity';
import { SpecialDiet } from 'src/api/special-diets/entities/special-diet.entity';

export class CreateMenuItemDto {
  @IsNotEmpty()
  name: string;
  description: string;
  @IsNotEmpty()
  price: string;
  @IsNotEmpty()
  menu_item_group: MenuItemGroup;
  cuisine_types: CuisineType[];
  special_diets: SpecialDiet[];
  @IsNotEmpty()
  menu: Menu;
}
