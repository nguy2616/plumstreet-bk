import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CuisineType } from '../../cuisine-types/entities/cuisine-type.entity';
import { EventService } from '../../event-services/entities/event-service.entity';
import { EventType } from '../../event-types/entities/event-type.entity';
import { MenuItemGroup } from '../../menu-item-groups/entities/menu-item-group.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';

@Entity('client_events')
export class ClientEvent {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public name: string;

  @ManyToOne(() => EventType, {
    eager: true,
    nullable: false,
  })
  public event_type: EventType;

  @Column({ nullable: false })
  public date: Date;

  @Column({ nullable: false })
  public budget: string;

  @Column({ nullable: false })
  public guests: number;

  @Column({ nullable: false })
  public location_name: string;

  @Column({ nullable: true })
  public other: string;

  @ManyToMany(
    () => CuisineType,
    (cuisine_type: CuisineType) => cuisine_type.events,
    {
      eager: true,
    },
  )
  @JoinTable()
  public cuisine_types: CuisineType[];

  @ManyToOne(() => User, {
    nullable: false,
    eager: true,
  })
  public client: User;

  @ManyToMany(() => EventService, (service: EventService) => service.events, {
    nullable: false,
    eager: true,
  })
  @JoinTable()
  public services: EventService[];

  @ManyToMany(() => MenuItemGroup, (offer: MenuItemGroup) => offer.events, {
    nullable: false,
    eager: true,
  })
  @JoinTable()
  public offers: MenuItemGroup[];

  @ManyToMany(() => Menu, (menu: Menu) => menu.events, {
    eager: true,
  })
  @JoinTable({ name: 'event-fav_menus' })
  public fav_menus: Menu[];

  @ManyToMany(() => MenuItem, (menu_item: MenuItem) => menu_item.events, {
    eager: true,
  })
  @JoinTable({ name: 'event-fav_items' })
  public fav_menu_items: MenuItem[];
}
