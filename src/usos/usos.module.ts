import { Module } from '@nestjs/common';
import { UsosService } from './usos.service';
import { UsosController } from './usos.controller';
import { Uso } from './entities/uso.entity';
import { TypeOrmModule } from 'node_modules/@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([Uso])],
  controllers: [UsosController],
  providers: [UsosService],
  exports: [UsosService],
})
export class UsosModule {}
