import { FoodtrucksService } from './foodtrucks.service';
import { CreateFoodtruckDto } from './dto/create-foodtruck.dto';
import { UpdateFoodtruckDto } from './dto/update-foodtruck.dto';
export declare class FoodtrucksController {
    private readonly foodtrucksService;
    constructor(foodtrucksService: FoodtrucksService);
    create(createFoodtruckDto: CreateFoodtruckDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateFoodtruckDto: UpdateFoodtruckDto): any;
    remove(id: string): any;
}
