import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class LessonInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  startDate: string;

  @Field()
  @IsNotEmpty()
  endDate: string;

  @Field((type) => [ID], { defaultValue: [] })
  @IsUUID('4', { each: true })
  students: string[];
}
