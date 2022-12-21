import { Field, InputType } from "type-graphql";
import { CreateTodoInput } from "./create-todo.input";

@InputType()
export class UpdateTodoInput extends CreateTodoInput {
  @Field()
  id: string;
}
