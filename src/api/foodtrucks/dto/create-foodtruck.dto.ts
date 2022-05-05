import { IsNotEmpty, IsNumber } from 'class-validator';
import { Company } from '../../companies/entities/company.entity';

export class CreateFoodtruckDto {
  carModel: string;
  @IsNotEmpty()
  carID: string;
  @IsNumber()
  length: number;
  @IsNumber()
  width: number;
  @IsNumber()
  height: number;
  amperage: string;
  other: string;
  @IsNotEmpty()
  company: Company;
}
