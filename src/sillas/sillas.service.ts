import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSillaDto } from './dto/create-silla.dto';
import { UpdateSillaDto } from './dto/update-silla.dto';
import { Silla } from './entities/silla.entity';
import { UsosService } from '../usos/usos.service';

@Injectable()
export class SillasService {
  constructor(
    @InjectRepository(Silla) private readonly sillaRepository: Repository<Silla>,
    private readonly usosService: UsosService,
  ) {}

  async create(createSillaDto: CreateSillaDto) {
    await this.usosService.findOne(createSillaDto.uso_id);

    return this.sillaRepository
      .save({
        nombre: createSillaDto.nombre,
        marca: createSillaDto.marca,
        precio: createSillaDto.precio,
        uso: { id: createSillaDto.uso_id },
      })
      .catch((error) => {
        throw new NotFoundException(
          `Error al guardar la silla en la base de datos: ${error.message}`,
        );
      });
  }

  findAll() {
    return this.sillaRepository
      .find({ relations: { uso: true } })
      .catch((error) => {
        throw new NotFoundException(
          `Error al obtener las sillas de la base de datos: ${error.message}`,
        );
      });
  }

  findOne(id: number) {
    return this.sillaRepository
      .findOne({ where: { id }, relations: { uso: true } })
      .catch((error) => {
        throw new NotFoundException(
          `Error al obtener la silla de la base de datos: ${error.message}`,
        );
      });
  }

  async update(id: number, updateSillaDto: UpdateSillaDto) {
    const { uso_id, ...datos } = updateSillaDto;

    if (uso_id !== undefined) {
      await this.usosService.findOne(uso_id);
    }

    const result = await this.sillaRepository
      .update(id, {
        ...datos,
        ...(uso_id !== undefined ? { uso: { id: uso_id } } : {}),
      })
      .catch((error) => {
        throw new NotFoundException(
          `Error al actualizar la silla en la base de datos: ${error.message}`,
        );
      });
    if (result.affected === 0) {
      throw new NotFoundException(`Silla con id ${id} no encontrada.`);
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const silla = await this.findOne(id);
    if (!silla) {
      throw new NotFoundException(`Silla con id ${id} no encontrada.`);
    }
    await this.sillaRepository.delete(id).catch((error) => {
      throw new NotFoundException(
        `Error al eliminar la silla de la base de datos: ${error.message}`,
      );
    });
    return {
      message: `Silla ${silla.nombre} eliminada exitosamente.`,
      status: 'success',
    };
  }
}
