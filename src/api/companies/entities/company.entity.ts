import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';
import { Category } from '../../categories/entities/category.entity';
import { CuisineType } from '../../cuisine-types/entities/cuisine-type.entity';
import { Foodtruck } from '../../foodtrucks/entities/foodtruck.entity';
import { LegalForm } from '../../legal-forms/entities/legal-form.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';

@Entity('companies')
export class Company extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public name: string;
  @Column({ nullable: true })
  public address: string;
  @Column({ nullable: true })
  public zip: number;
  @Column({ nullable: true })
  public city: string;
  @Column({ nullable: true })
  public country: string;

  @Column({ nullable: true })
  public bankName: string;
  @Column({ nullable: true })
  public bankAddress: string;
  @Column({ nullable: true })
  public bankZip: number;
  @Column({ nullable: true })
  public bankCity: string;
  @Column({ nullable: true })
  public bankCountry: string;
  @Column({ nullable: true })
  public IBAN: string;

  @ManyToOne(() => Category, {
    eager: true,
    nullable: false,
  })
  @JoinColumn()
  public category: Category;

  @ManyToOne(() => LegalForm, {
    eager: true,
  })
  @JoinColumn()
  public legalForm: LegalForm;

  @OneToMany(() => User, (contact: User) => contact.company, {
    nullable: false,
    cascade: true,
  })
  public contacts: User[];

  @OneToMany(() => Foodtruck, (foodtruck: Foodtruck) => foodtruck.company, {
    cascade: true,
  })
  public foodtrucks: Foodtruck[];

  @ManyToMany(
    () => CuisineType,
    (cuisine_type: CuisineType) => cuisine_type.companies,
    {
      eager: true,
    },
  )
  @JoinTable()
  public cuisine_types: CuisineType[];

  @OneToMany(() => Menu, (menu: Menu) => menu.company, {
    cascade: true,
  })
  public menus: Menu[];
}
