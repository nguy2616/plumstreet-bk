import { Genetic } from '../../../utils/genetic.entity';
import { Company } from '../../companies/entities/company.entity';
import { File } from '../../files/entities/file.entity';
export declare class Foodtruck extends Genetic {
    id: number;
    carModel: string;
    carID: string;
    length: number;
    width: number;
    height: number;
    amperage: string;
    other: string;
    image: File;
    company: Company;
}
