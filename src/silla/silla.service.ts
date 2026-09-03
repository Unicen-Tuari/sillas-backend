import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Silla } from './silla.entity';
import { Uso } from '../uso/uso.entity';
import { CreateSillaDto } from './dto/create-silla.dto';
import { UpdateSillaDto } from './dto/update-silla.dto';

@Injectable()
export class SillaService {
  constructor(
    @InjectRepository(Silla)
    private readonly sillaRepository: Repository<Silla>,
    @InjectRepository(Uso)
    private readonly usoRepository: Repository<Uso>,
  ) {}

  async create(createSillaDto: CreateSillaDto): Promise<Silla> {
    const uso = await this.usoRepository.findOne({ where: { id: createSillaDto.usoId } });
    if (!uso) {
      throw new BadRequestException(`Uso con ID ${createSillaDto.usoId} no existe`);
    }

    const silla = this.sillaRepository.create({
      ...createSillaDto,
      uso,
    });
    return this.sillaRepository.save(silla);
  }

  async findAll(usoId?: number): Promise<Silla[]> {
    const query = this.sillaRepository.createQueryBuilder('silla')
      .leftJoinAndSelect('silla.uso', 'uso');

    if (usoId) {
      query.where('silla.usoId = :usoId', { usoId });
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Silla> {
    const silla = await this.sillaRepository.findOne({
      where: { id },
      relations: ['uso'],
    });
    if (!silla) {
      throw new NotFoundException(`Silla con ID ${id} no encontrada`);
    }
    return silla;
  }

  async update(id: number, updateSillaDto: UpdateSillaDto): Promise<Silla> {
    const silla = await this.findOne(id);

    if (updateSillaDto.usoId) {
      const uso = await this.usoRepository.findOne({ where: { id: updateSillaDto.usoId } });
      if (!uso) {
        throw new BadRequestException(`Uso con ID ${updateSillaDto.usoId} no existe`);
      }
      silla.uso = uso;
    }

    Object.assign(silla, updateSillaDto);
    return this.sillaRepository.save(silla);
  }

  async remove(id: number): Promise<void> {
    const silla = await this.findOne(id);
    await this.sillaRepository.remove(silla);
  }
}