// src/teachers/teachers.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTeacherDto, TeacherDto, UpdateTeacherDto } from './teacher.entity';

@Injectable()
export class TeachersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<TeacherDto[]> {
    return this.prisma.teacher.findMany();
  }

  async findOne(id: number): Promise<TeacherDto> {
    return this.prisma.teacher.findUnique({ where: { id } });
  }

  async create(createTeacherDto: CreateTeacherDto): Promise<TeacherDto> {
    return this.prisma.teacher.create({ data: createTeacherDto });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<TeacherDto> {
    return this.prisma.teacher.update({ where: { id }, data: updateTeacherDto });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.teacher.delete({ where: { id } });
  }
}
