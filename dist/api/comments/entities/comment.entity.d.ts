import { Genetic } from '../../../utils/genetic.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';
export declare class Comment extends Genetic {
    id: number;
    content: string;
    menu: Menu;
    author: User;
}
