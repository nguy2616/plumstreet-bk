import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';

@Entity('event_services')
export class EventService extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public name: string;

  @ManyToMany(() => ClientEvent)
  public events: ClientEvent[];
}
