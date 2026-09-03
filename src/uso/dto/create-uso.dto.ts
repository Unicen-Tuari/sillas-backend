import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUsoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}