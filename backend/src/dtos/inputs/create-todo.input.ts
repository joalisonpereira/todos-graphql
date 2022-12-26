import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTodoInput {
  @Field()
  name: string;

  @Field()
  doneAt: string;

  @Field()
  userId: string;
}
