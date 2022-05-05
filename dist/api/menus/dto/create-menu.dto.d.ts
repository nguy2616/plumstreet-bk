import { Company } from 'src/api/companies/entities/company.entity';
import { CuisineType } from 'src/api/cuisine-types/entities/cuisine-type.entity';
import { MenuItem } from 'src/api/menu-items/entities/menu-item.entity';
import { SpecialDiet } from 'src/api/special-diets/entities/special-diet.entity';
export declare class CreateMenuDto {
    name: string;
    description: string;
    isStandard: boolean;
    cuisine_types: CuisineType[];
    special_diets: SpecialDiet[];
    menu_items: MenuItem[];
    company: Company;
}
