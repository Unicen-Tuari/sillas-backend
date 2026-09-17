import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SillasService } from './sillas.service';
import { CreateSillaDto } from './dto/create-silla.dto';
import { UpdateSillaDto } from './dto/update-silla.dto';

@Controller('sillas')
export class SillasController {
  constructor(private readonly sillasService: SillasService) {}

  @Post()
  create(@Body() createSillaDto: CreateSillaDto) {
    return this.sillasService.create(createSillaDto);
  }

  @Get()
  findAll() {
    return this.sillasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sillasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSillaDto: UpdateSillaDto) {
    return this.sillasService.update(+id, updateSillaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sillasService.remove(+id);
  }
}
