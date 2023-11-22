// src/teachers/teachers.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto, TeacherDto, UpdateTeacherDto } from './teacher.entity';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  findAll(): Promise<TeacherDto[]> {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TeacherDto> {
    return this.teachersService.findOne(+id);
  }

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto): Promise<TeacherDto> {
    return this.teachersService.create(createTeacherDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto): Promise<TeacherDto> {
    return this.teachersService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.teachersService.remove(+id);
  }
}
