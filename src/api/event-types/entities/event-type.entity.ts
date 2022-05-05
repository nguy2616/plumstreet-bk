import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';

@Entity('event_type')
export class EventType extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false, unique: true })
  public name: string;
}
