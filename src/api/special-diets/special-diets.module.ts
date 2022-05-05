import { Module } from '@nestjs/common';
import { SpecialDietsService } from './special-diets.service';
import { SpecialDietsController } from './special-diets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialDiet } from './entities/special-diet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpecialDiet])],
  controllers: [SpecialDietsController],
  providers: [SpecialDietsService],
})
export class SpecialDietsModule {}
