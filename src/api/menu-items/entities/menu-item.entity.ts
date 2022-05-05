import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';
import { CuisineType } from '../../cuisine-types/entities/cuisine-type.entity';
import { File } from '../../files/entities/file.entity';
import { MenuItemGroup } from '../../menu-item-groups/entities/menu-item-group.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { SpecialDiet } from '../../special-diets/entities/special-diet.entity';

@Entity('menu_items')
export class MenuItem extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public name: string;

  @Column({ nullable: true })
  public description: string;

  @Column({ nullable: false })
  public price: string;

  @OneToMany(() => File, (image: File) => image.menu_item, {
    eager: true,
    cascade: true,
  })
  public images: File[];

  @ManyToOne(
    () => MenuItemGroup,
    (menu_item_group: MenuItemGroup) => menu_item_group.menu_items,
    {
      nullable: false,
      eager: true,
    },
  )
  public menu_item_group: MenuItemGroup;

  @ManyToMany(
    () => CuisineType,
    (cuisine_type: CuisineType) => cuisine_type.menu_items,
    {
      eager: true,
    },
  )
  @JoinTable()
  public cuisine_types: CuisineType[];

  @ManyToMany(
    () => SpecialDiet,
    (special_diet: SpecialDiet) => special_diet.menu_items,
    {
      eager: true,
    },
  )
  @JoinTable()
  public special_diets: SpecialDiet[];

  @ManyToOne(() => Menu, {
    nullable: false,
  })
  public menu: any;

  @ManyToMany(() => ClientEvent)
  public events: ClientEvent[];
}
