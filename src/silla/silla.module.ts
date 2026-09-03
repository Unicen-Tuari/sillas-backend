import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Silla } from './silla.entity';
import { Uso } from '../uso/uso.entity';
import { SillaService } from './silla.service';
import { SillaController } from './silla.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Silla, Uso])],
  controllers: [SillaController],
  providers: [SillaService],
})
export class SillaModule {}