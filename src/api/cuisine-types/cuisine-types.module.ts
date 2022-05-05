import { Module } from '@nestjs/common';
import { CuisineTypesService } from './cuisine-types.service';
import { CuisineTypesController } from './cuisine-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuisineType } from './entities/cuisine-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CuisineType])],
  controllers: [CuisineTypesController],
  providers: [CuisineTypesService],
})
export class CuisineTypesModule {}
