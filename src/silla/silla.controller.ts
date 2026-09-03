import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { SillaService } from './silla.service';
import { CreateSillaDto } from './dto/create-silla.dto';
import { UpdateSillaDto } from './dto/update-silla.dto';

@Controller('sillas')
export class SillaController {
  constructor(private readonly sillaService: SillaService) {}

  @Post()
  create(@Body() createSillaDto: CreateSillaDto) {
    return this.sillaService.create(createSillaDto);
  }

  @Get()
  findAll(@Query('usoId', new ParseIntPipe({ optional: true })) usoId?: number) {
    return this.sillaService.findAll(usoId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sillaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSillaDto: UpdateSillaDto) {
    return this.sillaService.update(id, updateSillaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sillaService.remove(id);
  }
}