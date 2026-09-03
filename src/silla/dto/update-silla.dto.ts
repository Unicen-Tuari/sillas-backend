import { PartialType } from '@nestjs/swagger';
import { CreateSillaDto } from './create-silla.dto';

export class UpdateSillaDto extends PartialType(CreateSillaDto) {}