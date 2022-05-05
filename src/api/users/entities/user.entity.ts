import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';
import { Company } from '../../companies/entities/company.entity';
import { File } from '../../files/entities/file.entity';
import { Role } from '../../roles/entities/role.entity';

@Entity('users')
export class User extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public fullName: string;

  @Column({ nullable: false, unique: true })
  public email: string;

  @Column({ nullable: false })
  @Exclude()
  public password: string;

  @Column({ nullable: false })
  public phoneNumber: string;

  @OneToOne(() => File, {
    nullable: true,
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public avatar: File;

  @ManyToOne(() => Role, {
    eager: true,
  })
  public role: Role;

  @ManyToOne(() => Company, (company: Company) => company.contacts, {
    eager: true,
  })
  public company: any;

  @OneToMany(() => ClientEvent, (event: ClientEvent) => event.client, {
    cascade: true,
  })
  public events: ClientEvent[];
}
