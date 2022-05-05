import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Menu } from '../../menus/entities/menu.entity';

@Entity('special_diets')
export class SpecialDiet extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false, unique: true })
  public name: string;

  @ManyToMany(() => Menu, (menu: Menu) => menu.special_diets)
  public menus: Menu[];

  @ManyToMany(() => MenuItem, (menu_item: MenuItem) => menu_item.special_diets)
  public menu_items: MenuItem[];
}
