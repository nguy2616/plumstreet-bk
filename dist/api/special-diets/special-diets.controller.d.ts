import { SpecialDietsService } from './special-diets.service';
import { CreateSpecialDietDto } from './dto/create-special-diet.dto';
import { UpdateSpecialDietDto } from './dto/update-special-diet.dto';
export declare class SpecialDietsController {
    private readonly specialDietsService;
    constructor(specialDietsService: SpecialDietsService);
    create(createSpecialDietDto: CreateSpecialDietDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateSpecialDietDto: UpdateSpecialDietDto): Promise<any>;
    remove(id: string): Promise<any>;
}
