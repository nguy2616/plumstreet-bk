import { IsNotEmpty } from 'class-validator';
import { Menu } from '../../menus/entities/menu.entity';

export class CreateCommentDto {
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  menu: Menu;
}
