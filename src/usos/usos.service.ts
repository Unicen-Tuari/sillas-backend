import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsoDto } from './dto/create-uso.dto';
import { UpdateUsoDto } from './dto/update-uso.dto';
import { Uso } from './entities/uso.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsosService {
  constructor(
    @InjectRepository(Uso) private readonly usoRepository: Repository<Uso>,
  ) {}

  create(createUsoDto: CreateUsoDto) {
    return this.usoRepository.save(createUsoDto).catch((error) => {
      throw new NotFoundException(
        `Error al guardar el uso en la base de datos: ${error.message}`,
      );
    });
  }

  findAll() {
    return this.usoRepository.find().catch((error) => {
      throw new NotFoundException(
        `Error al obtener los usos de la base de datos: ${error.message}`,
      );
    });
  }

  findOne(id: number) {
    return this.usoRepository.findOne({ where: { id } }).catch((error) => {
      throw new NotFoundException(
        `Error al obtener el uso de la base de datos: ${error.message}`,
      );
    });
  }

  async update(id: number, updateUsoDto: UpdateUsoDto) {
    const result = this.usoRepository.update(id, updateUsoDto).catch((error) => {
      throw new NotFoundException(
        `Error al actualizar el uso en la base de datos: ${error.message}`,
      );
    });
    if ((await result).affected === 0) {
      throw new NotFoundException(`Uso con id ${id} no encontrado.`);
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const uso = await this.findOne(id);
    if (!uso) {
      throw new NotFoundException(`Uso con id ${id} no encontrado.`);
    }
    this.usoRepository.delete(id).catch((error) => {
      throw new NotFoundException(
        `Error al eliminar el uso de la base de datos: ${error.message}`,
      );
    });
    return {
      message: `Uso ${uso.nombre} eliminado exitosamente.`,
      status: 'success',
    }
  }
}
