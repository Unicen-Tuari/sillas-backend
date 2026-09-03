import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Silla } from '../silla/silla.entity';

@Entity()
export class Uso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Silla, (silla) => silla.uso)
  sillas: Silla[];
}