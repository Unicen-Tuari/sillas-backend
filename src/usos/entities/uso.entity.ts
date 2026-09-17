import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Silla } from '../../sillas/entities/silla.entity';

@Entity()
export class Uso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @OneToMany(() => Silla, (silla) => silla.uso)
  sillas!: Silla[];
}
