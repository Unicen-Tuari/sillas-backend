import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SillasService } from './sillas.service';
import { SillasController } from './sillas.controller';
import { Silla } from './entities/silla.entity';
import { UsosModule } from '../usos/usos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Silla]), UsosModule],
  controllers: [SillasController],
  providers: [SillasService],
})
export class SillasModule {}
