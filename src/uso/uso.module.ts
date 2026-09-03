import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uso } from './uso.entity';
import { UsoService } from './uso.service';
import { UsoController } from './uso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Uso])],
  controllers: [UsoController],
  providers: [UsoService],
  exports: [UsoService],
})
export class UsoModule {}