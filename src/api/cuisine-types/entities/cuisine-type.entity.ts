import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';
import { Company } from '../../companies/entities/company.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Menu } from '../../menus/entities/menu.entity';

@Entity('cuisine_types')
export class CuisineType extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false, unique: true })
  public name: string;

  @ManyToMany(() => Company, (company: Company) => company.cuisine_types)
  public companies: Company[];

  @ManyToMany(() => Menu, (menu: Menu) => menu.cuisine_types)
  public menus: Menu[];

  @ManyToMany(() => MenuItem, (menu_item: MenuItem) => menu_item.cuisine_types)
  public menu_items: MenuItem[];

  @ManyToMany(() => ClientEvent, (event: ClientEvent) => event.cuisine_types)
  public events: ClientEvent[];
  isCheck: boolean;
}
