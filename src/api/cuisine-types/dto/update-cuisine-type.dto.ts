import { PartialType } from '@nestjs/mapped-types';
import { CreateCuisineTypeDto } from './create-cuisine-type.dto';

export class UpdateCuisineTypeDto extends PartialType(CreateCuisineTypeDto) {}
