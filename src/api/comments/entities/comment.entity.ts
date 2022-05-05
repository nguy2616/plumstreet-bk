import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Genetic } from '../../../utils/genetic.entity';
import { Menu } from '../../menus/entities/menu.entity';
import { User } from '../../users/entities/user.entity';

@Entity('comments')
export class Comment extends Genetic {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public content: string;

  @ManyToOne(() => Menu, { nullable: false })
  public menu: Menu;

  @ManyToOne(() => User, { nullable: false })
  public author: User;
}
