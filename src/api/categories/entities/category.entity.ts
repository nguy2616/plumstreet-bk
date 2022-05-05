import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';

@Entity('categories')
export class Category extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
}
