import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Uso } from '../../usos/entities/uso.entity';

@Entity()
export class Silla {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  marca!: string;

  @Column('decimal')
  precio!: number;

  @ManyToOne(() => Uso, (uso) => uso.sillas)
  @JoinColumn({ name: 'uso_id' })
  uso!: Uso;
}
