import { IsNotEmpty } from 'class-validator';

export class CreateSpecialDietDto {
  @IsNotEmpty()
  name: string;
}
