import { Category } from '../../categories/entities/category.entity';
import { CuisineType } from '../../cuisine-types/entities/cuisine-type.entity';
import { Foodtruck } from '../../foodtrucks/entities/foodtruck.entity';
import { LegalForm } from '../../legal-forms/entities/legal-form.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';
export declare class CreateCompanyDto {
    name: string;
    address: string;
    zip: number;
    city: string;
    country: string;
    bankName: string;
    bankAddress: string;
    bankZip: number;
    bankCity: string;
    bankCountry: string;
    IBAN: string;
    category: Category;
    legalForm: LegalForm;
    contacts: User[];
    foodtrucks: Foodtruck[];
    cuisine_types: CuisineType[];
    menus: Menu[];
}
