import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsoService } from './uso.service';
import { CreateUsoDto } from './dto/create-uso.dto';
import { UpdateUsoDto } from './dto/update-uso.dto';

@Controller('usos')
export class UsoController {
  constructor(private readonly usoService: UsoService) {}

  @Post()
  create(@Body() createUsoDto: CreateUsoDto) {
    return this.usoService.create(createUsoDto);
  }

  @Get()
  findAll() {
    return this.usoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUsoDto: UpdateUsoDto) {
    return this.usoService.update(id, updateUsoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usoService.remove(id);
  }
}