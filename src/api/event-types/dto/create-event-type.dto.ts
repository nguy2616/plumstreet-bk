import { IsNotEmpty } from 'class-validator';

export class CreateEventTypeDto {
  @IsNotEmpty()
  name: string;
}
