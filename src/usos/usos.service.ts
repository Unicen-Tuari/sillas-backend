import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsoDto } from './dto/create-uso.dto';
import { UpdateUsoDto } from './dto/update-uso.dto';
import { Uso } from './entities/uso.entity';
import { NotFoundError, throwError } from 'rxjs';

@Injectable()
export class UsosService {
  private usos: Uso[] = [
    new Uso(1, 'Living'),
    new Uso(2, 'Dormitorio'),
    new Uso(3, 'Cocina'),
    new Uso(4, 'Oficina'),
    new Uso(5, 'Educación'),
  ]; // In-memory storage for usos

  create(createUsoDto: CreateUsoDto) {
    const newUso = new Uso(this.usos.length + 1, createUsoDto.nombre);
    this.usos.push(newUso);
    return newUso;
  }

  findAll() {
    return this.usos;
  }

  findOne(id: number) {
    return `This action returns a #${id} uso`;
  }

  update(id: number, updateUsoDto: UpdateUsoDto) {
    return `This action updates a #${id} uso`;
  }

  remove(id: number) {
    const index = this.usos.findIndex((uso) => uso.id === id);
    if (index === -1) {
      throw new NotFoundException(`El uso con ID ${id} no existe.`);
    }
    this.usos.splice(index, 1);
    return `El uso con ID ${id} ha sido eliminado.`;
  }
}
