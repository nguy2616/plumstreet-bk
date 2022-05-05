import { CuisineTypesService } from './cuisine-types.service';
import { CreateCuisineTypeDto } from './dto/create-cuisine-type.dto';
import { UpdateCuisineTypeDto } from './dto/update-cuisine-type.dto';
export declare class CuisineTypesController {
    private readonly cuisineTypesService;
    constructor(cuisineTypesService: CuisineTypesService);
    create(createCuisineTypeDto: CreateCuisineTypeDto): any;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateCuisineTypeDto: UpdateCuisineTypeDto): Promise<any>;
    remove(id: string): Promise<any>;
}
