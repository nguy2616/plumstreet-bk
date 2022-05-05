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
import { Comment } from '../../comments/entities/comment.entity';
import { Company } from '../../companies/entities/company.entity';
import { CuisineType } from '../../cuisine-types/entities/cuisine-type.entity';
import { File } from '../../files/entities/file.entity';
import { MenuItem } from '../../menu-items/entities/menu-item.entity';
import { SpecialDiet } from '../../special-diets/entities/special-diet.entity';

@Entity('menus')
export class Menu extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    nullable: false,
  })
  public name: string;

  @Column({
    nullable: true,
  })
  public description: string;

  @Column({
    nullable: true,
  })
  public isStandard: boolean;

  @OneToMany(() => File, (image: File) => image.menu, {
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  public images: File[];

  @ManyToMany(
    () => CuisineType,
    (cuisine_type: CuisineType) => cuisine_type.menus,
    {
      eager: true,
    },
  )
  @JoinTable()
  public cuisine_types: CuisineType[];

  @ManyToMany(
    () => SpecialDiet,
    (special_diet: SpecialDiet) => special_diet.menus,
    {
      eager: true,
    },
  )
  @JoinTable()
  public special_diets: SpecialDiet[];

  @OneToMany(() => MenuItem, (menu_item: MenuItem) => menu_item.menu, {
    cascade: true,
  })
  public menu_items: MenuItem[];

  @OneToMany(() => Comment, (comment: Comment) => comment.menu, {
    onDelete: 'CASCADE',
  })
  public comments: Comment[];

  @ManyToMany(() => ClientEvent)
  public events: ClientEvent[];

  @ManyToOne(() => Company, {
    nullable: false,
    eager: true,
  })
  public company: Company;
}
