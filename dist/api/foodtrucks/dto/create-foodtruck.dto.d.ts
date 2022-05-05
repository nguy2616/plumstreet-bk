import { Company } from '../../companies/entities/company.entity';
export declare class CreateFoodtruckDto {
    carModel: string;
    carID: string;
    length: number;
    width: number;
    height: number;
    amperage: string;
    other: string;
    company: Company;
}
