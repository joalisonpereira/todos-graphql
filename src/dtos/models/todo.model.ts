import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Todo {
  @Field()
  name: string;

  @Field()
  doneAt: Date;

  @Field()
  userId: string;
}
