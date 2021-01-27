import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { StudentInput } from './student.input';
import { Student } from './student.entity';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => StudentType)
  getStudent(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudent(id);
  }

  @Query((returns) => [StudentType])
  getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: StudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }
}
