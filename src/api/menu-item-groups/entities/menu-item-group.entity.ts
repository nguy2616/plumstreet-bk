import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';

@Entity('menu_item_groups')
export class MenuItemGroup extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false, unique: true })
  public name: string;

  @OneToMany(() => MenuItem, (menu_item: MenuItem) => menu_item.menu_item_group)
  public menu_items: MenuItem[];

  @ManyToMany(() => ClientEvent)
  public events: ClientEvent[];
}
