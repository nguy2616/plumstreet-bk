import { IsNotEmpty } from 'class-validator';

export class CreateMenuItemGroupDto {
  @IsNotEmpty()
  name: string;
}
