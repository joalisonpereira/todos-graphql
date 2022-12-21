import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTodoInput {
  @Field()
  name: string;

  @Field()
  doneAt: Date;

  @Field()
  userId: string;
}
