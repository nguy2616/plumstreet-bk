import { IsNotEmpty } from 'class-validator';

export class CreateLegalFormDto {
  @IsNotEmpty()
  name: string;
}
