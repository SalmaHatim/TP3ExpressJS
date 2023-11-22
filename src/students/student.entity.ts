// src/students/student.entity.ts

import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateStudentDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly address: string;

  @ApiProperty()
  readonly parentsPhoneNumber: string;
}

export class StudentDto extends CreateStudentDto {
  @ApiProperty()
  readonly id: number;
}

export class UpdateStudentDto extends CreateStudentDto {}

export const studentPrismaModel: Prisma.StudentCreateInput = {
  name: '',
  age: 0,
  address: '',
  parentsPhoneNumber: '',
};
