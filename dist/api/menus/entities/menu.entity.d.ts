import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { Company } from '../../companies/entities/company.entity';
import { CuisineType } from '../../cuisine-types/entities/cuisine-type.entity';
import { File } from '../../files/entities/file.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { SpecialDiet } from '../../special-diets/entities/special-diet.entity';
export declare class Menu extends Genetic {
    id: number;
    name: string;
    description: string;
    isStandard: boolean;
    images: File[];
    cuisine_types: CuisineType[];
    special_diets: SpecialDiet[];
    menu_items: MenuItem[];
    comments: Comment[];
    events: ClientEvent[];
    company: Company;
}
