import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Uso } from '../uso/uso.entity';
import { TamanoSilla } from './tamano-silla.enum';

@Entity()
export class Silla {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  material: string;

  @Column({
    type: 'enum',
    enum: TamanoSilla,
  })
  tamaño: TamanoSilla;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  precio: number;

  @ManyToOne(() => Uso, (uso) => uso.sillas)
  @JoinColumn({ name: 'usoId' })
  uso: Uso;
}