import { PartialType } from '@nestjs/swagger';
import { CreateUsoDto } from './create-uso.dto';

export class UpdateUsoDto extends PartialType(CreateUsoDto) {}