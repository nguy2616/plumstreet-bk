import { Repository } from 'typeorm';
import { CreateCuisineTypeDto } from './dto/create-cuisine-type.dto';
import { UpdateCuisineTypeDto } from './dto/update-cuisine-type.dto';
import { CuisineType } from './entities/cuisine-type.entity';
export declare class CuisineTypesService {
    private cuisineTypesRepository;
    constructor(cuisineTypesRepository: Repository<CuisineType>);
    create(createCuisineTypeDto: CreateCuisineTypeDto): Promise<CuisineType>;
    findAll(): Promise<CuisineType[]>;
    findOne(id: number): Promise<CuisineType>;
    update(id: number, updateCuisineTypeDto: UpdateCuisineTypeDto): Promise<CuisineType>;
    remove(id: number): Promise<string>;
}
