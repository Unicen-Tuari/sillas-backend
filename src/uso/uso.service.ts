import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Uso } from './uso.entity';
import { CreateUsoDto } from './dto/create-uso.dto';
import { UpdateUsoDto } from './dto/update-uso.dto';

@Injectable()
export class UsoService {
  constructor(
    @InjectRepository(Uso)
    private readonly usoRepository: Repository<Uso>,
  ) {}

  async create(createUsoDto: CreateUsoDto): Promise<Uso> {
    const uso = this.usoRepository.create(createUsoDto);
    return this.usoRepository.save(uso);
  }

  async findAll(): Promise<Uso[]> {
    return this.usoRepository.find({ relations: ['sillas'] });
  }

  async findOne(id: number): Promise<Uso> {
    const uso = await this.usoRepository.findOne({ where: { id }, relations: ['sillas'] });
    if (!uso) {
      throw new NotFoundException(`Uso con ID ${id} no encontrado`);
    }
    return uso;
  }

  async update(id: number, updateUsoDto: UpdateUsoDto): Promise<Uso> {
    const uso = await this.findOne(id);
    Object.assign(uso, updateUsoDto);
    return this.usoRepository.save(uso);
  }

  async remove(id: number): Promise<void> {
    const uso = await this.findOne(id);
    await this.usoRepository.remove(uso);
  }
}