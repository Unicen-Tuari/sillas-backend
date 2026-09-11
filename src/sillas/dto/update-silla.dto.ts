import { PartialType } from '@nestjs/mapped-types';
import { CreateSillaDto } from './create-silla.dto';

export class UpdateSillaDto extends PartialType(CreateSillaDto) {}
