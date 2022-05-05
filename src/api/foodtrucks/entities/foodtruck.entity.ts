import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';
import { Company } from '../../companies/entities/company.entity';
import { File } from '../../files/entities/file.entity';

@Entity('foodtrucks')
export class Foodtruck extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public carModel: string;

  @Column({ nullable: false, unique: true })
  public carID: string;

  @Column({ nullable: true })
  public length: number;

  @Column({ nullable: true })
  public width: number;

  @Column({ nullable: true })
  public height: number;

  @Column({ nullable: true })
  public amperage: string;

  @Column({ nullable: true })
  public other: string;

  @OneToOne(() => File, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public image: File;

  @ManyToOne(() => Company, {
    eager: true,
    nullable: false,
  })
  public company: Company;
}
