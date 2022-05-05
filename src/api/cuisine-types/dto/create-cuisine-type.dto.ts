import { IsNotEmpty } from 'class-validator';

export class CreateCuisineTypeDto {
  @IsNotEmpty()
  name: string;
}
