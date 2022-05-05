import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';
export declare class CompaniesService {
    private companiesRepository;
    private usersRepository;
    constructor(companiesRepository: Repository<Company>, usersRepository: Repository<User>);
    create(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAll(): Promise<Company[]>;
    findOne(id: number): Promise<Company>;
    update(id: number, updateCompanyDto: any): Promise<Company>;
    remove(id: number): Promise<string>;
    private hashContactsPw;
    private deleteChildren;
}
