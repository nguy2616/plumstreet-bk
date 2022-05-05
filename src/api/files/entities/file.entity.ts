import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';

@Entity('files')
export class File extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public url: string;

  @Column()
  public key: string;

  @OneToOne(() => User, (user: User) => user.avatar)
  public user: User;

  @ManyToOne(() => Menu, (menu: Menu) => menu.images)
  public menu: Menu;

  @ManyToOne(() => MenuItem, (menu_item: MenuItem) => menu_item.images)
  public menu_item: MenuItem;
}
