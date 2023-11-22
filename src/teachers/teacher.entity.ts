// src/teachers/teacher.entity.ts

import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateTeacherDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly phoneNumber: string;

  @ApiProperty()
  readonly address: string;

  @ApiProperty()
  readonly numberOfClasses: number;
}

export class TeacherDto extends CreateTeacherDto {
  @ApiProperty()
  readonly id: number;
}

export class UpdateTeacherDto extends CreateTeacherDto {}

export const teacherPrismaModel: Prisma.TeacherCreateInput = {
  name: '',
  age: 0,
  phoneNumber: '',
  address: '',
  numberOfClasses: 0,
};
