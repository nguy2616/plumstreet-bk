import { Repository } from 'typeorm';
import { CreateFoodtruckDto } from './dto/create-foodtruck.dto';
import { Foodtruck } from './entities/foodtruck.entity';
export declare class FoodtrucksService {
    private foodtrucksRepository;
    constructor(foodtrucksRepository: Repository<Foodtruck>);
    create(createFoodtruckDto: CreateFoodtruckDto): Promise<Foodtruck>;
    findAll(): Promise<Foodtruck[]>;
    findOne(id: number): Promise<Foodtruck>;
    update(id: number, updateFoodtruckDto: any): Promise<Foodtruck>;
    remove(id: number): Promise<string>;
}
