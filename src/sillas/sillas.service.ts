import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSillaDto } from './dto/create-silla.dto';
import { UpdateSillaDto } from './dto/update-silla.dto';
import { Silla } from './entities/silla.entity';
import { UsosService } from '../usos/usos.service';

@Injectable()
export class SillasService {
  private sillas: Silla[] = []; // In-memory storage for sillas

  constructor(private readonly usosService: UsosService) {}

  create(createSillaDto: CreateSillaDto) {
    this.usosService.findOne(createSillaDto.uso_id);

    const newSilla = new Silla(
      this.sillas.length + 1,
      createSillaDto.nombre,
      createSillaDto.marca,
      createSillaDto.precio,
      createSillaDto.uso_id,
    );
    this.sillas.push(newSilla);
    return newSilla;
  }

  findAll() {
    return this.sillas;
  }

  findOne(id: number) {
    const silla = this.sillas.find((silla) => silla.id === id);
    if (!silla) {
      throw new NotFoundException(`La silla con ID ${id} no existe.`);
    }
    return silla;
  }

  update(id: number, updateSillaDto: UpdateSillaDto) {
    const silla = this.sillas.find((silla) => silla.id === id);
    if (!silla) {
      throw new NotFoundException(`La silla con ID ${id} no existe.`);
    }

    if (updateSillaDto.uso_id !== undefined) {
      this.usosService.findOne(updateSillaDto.uso_id);
    }

    silla.nombre =
      typeof updateSillaDto.nombre === 'string'
        ? updateSillaDto.nombre
        : silla.nombre;
    silla.marca =
      typeof updateSillaDto.marca === 'string'
        ? updateSillaDto.marca
        : silla.marca;
    silla.precio =
      typeof updateSillaDto.precio === 'number'
        ? updateSillaDto.precio
        : silla.precio;
    silla.uso_id =
      typeof updateSillaDto.uso_id === 'number'
        ? updateSillaDto.uso_id
        : silla.uso_id;

    return silla;
  }

  remove(id: number) {
    const index = this.sillas.findIndex((silla) => silla.id === id);
    if (index === -1) {
      throw new NotFoundException(`La silla con ID ${id} no existe.`);
    }
    this.sillas.splice(index, 1);
    return `La silla con ID ${id} ha sido eliminada.`;
  }
}
