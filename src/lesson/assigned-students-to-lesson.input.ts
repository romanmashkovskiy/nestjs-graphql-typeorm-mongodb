import { Field, ID, InputType } from '@nestjs/graphql';
import { ArrayNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class AssignedStudentsToLessonInput {
  @Field((type) => ID)
  @IsUUID('4')
  id: string;

  @Field((type) => [ID])
  @IsUUID('4', { each: true })
  studentsIds: string[];
}
