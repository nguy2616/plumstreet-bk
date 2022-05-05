import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';
import { CuisineType } from '../../cuisine-types/entities/cuisine-type.entity';
import { File } from '../../files/entities/file.entity';
import { MenuItemGroup } from '../../menu-item-groups/entities/menu-item-group.entity';
import { SpecialDiet } from '../../special-diets/entities/special-diet.entity';
export declare class MenuItem extends Genetic {
    id: number;
    name: string;
    description: string;
    price: string;
    images: File[];
    menu_item_group: MenuItemGroup;
    cuisine_types: CuisineType[];
    special_diets: SpecialDiet[];
    menu: any;
    events: ClientEvent[];
}
