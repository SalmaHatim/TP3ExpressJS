import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersController } from './teachers/teachers.controller';
import { TeachersService } from './teachers/teachers.service';
import { StudentsController } from './students/students.controller';
import { StudentsService } from './students/students.service';

@Module({
  imports: [],
  controllers: [AppController, TeachersController, StudentsController],
  providers: [AppService, TeachersService, StudentsService],
})
export class AppModule {}
