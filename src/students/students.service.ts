// src/students/students.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto, StudentDto, UpdateStudentDto } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<StudentDto[]> {
    return this.prisma.student.findMany();
  }

  async findOne(id: number): Promise<StudentDto> {
    return this.prisma.student.findUnique({ where: { id } });
  }

  async create(createStudentDto: CreateStudentDto): Promise<StudentDto> {
    return this.prisma.student.create({ data: createStudentDto });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<StudentDto> {
    return this.prisma.student.update({ where: { id }, data: updateStudentDto });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.student.delete({ where: { id } });
  }
}
