import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecialDietDto } from './create-special-diet.dto';

export class UpdateSpecialDietDto extends PartialType(CreateSpecialDietDto) {}
