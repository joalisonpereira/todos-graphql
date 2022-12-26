import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Todo {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  doneAt: string;

  @Field()
  userId: string;
}
