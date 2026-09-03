import { IsString, IsNotEmpty, IsEnum, IsNumber, IsPositive, Min } from 'class-validator';
import { TamanoSilla } from '../tamano-silla.enum';
import { Type } from 'class-transformer';

export class CreateSillaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  material: string;

  @IsEnum(TamanoSilla)
  tamaño: TamanoSilla;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Min(0)
  precio: number;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  usoId: number;
}