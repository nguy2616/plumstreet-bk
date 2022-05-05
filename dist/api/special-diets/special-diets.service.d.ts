import { Repository } from 'typeorm';
import { CreateSpecialDietDto } from './dto/create-special-diet.dto';
import { UpdateSpecialDietDto } from './dto/update-special-diet.dto';
import { SpecialDiet } from './entities/special-diet.entity';
export declare class SpecialDietsService {
    private specialDietsRepository;
    constructor(specialDietsRepository: Repository<SpecialDiet>);
    create(createSpecialDietDto: CreateSpecialDietDto): Promise<SpecialDiet>;
    findAll(): Promise<SpecialDiet[]>;
    findOne(id: number): Promise<SpecialDiet>;
    update(id: number, updateSpecialDietDto: UpdateSpecialDietDto): Promise<SpecialDiet>;
    remove(id: number): Promise<string>;
}
