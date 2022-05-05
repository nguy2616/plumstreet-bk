import { Module } from '@nestjs/common';
import { FoodtrucksService } from './foodtrucks.service';
import { FoodtrucksController } from './foodtrucks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Foodtruck } from './entities/foodtruck.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Foodtruck])],
  controllers: [FoodtrucksController],
  providers: [FoodtrucksService],
})
export class FoodtrucksModule {}
