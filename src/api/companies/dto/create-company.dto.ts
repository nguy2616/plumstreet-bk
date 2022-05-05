import { IsNotEmpty, IsNumber } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';
import { CuisineType } from '../../cuisine-types/entities/cuisine-type.entity';
import { Foodtruck } from '../../foodtrucks/entities/foodtruck.entity';
import { LegalForm } from '../../legal-forms/entities/legal-form.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';

export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;
  address: string;
  @IsNumber()
  zip: number;
  city: string;
  country: string;

  bankName: string;
  bankAddress: string;
  @IsNumber()
  bankZip: number;
  bankCity: string;
  bankCountry: string;
  IBAN: string;
  @IsNotEmpty()
  category: Category;
  legalForm: LegalForm;
  @IsNotEmpty()
  contacts: User[];
  foodtrucks: Foodtruck[];
  cuisine_types: CuisineType[];
  menus: Menu[];
}
