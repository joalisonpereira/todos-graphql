import {
  Mutation,
  Query,
  Resolver,
  Arg,
  FieldResolver,
  Root,
} from "type-graphql";
import { CreateTodoInput } from "../dtos/inputs/create-todo.input";
import { Todo } from "../dtos/models/todo.model";
import { User } from "../dtos/models/user.model";
import db from "../mocks/db";

@Resolver(() => Todo)
export class TodosResolver {
  @Query(() => [Todo])
  async todos() {
    return db.todos;
  }

  @Mutation(() => Todo)
  async createTodo(@Arg("data") data: CreateTodoInput) {
    const todo = {
      name: data.name,
      doneAt: data.doneAt,
    };

    return todo;
  }

  @FieldResolver(() => User)
  async user(@Root() todo: Todo) {
    return db.users.find((u) => u.id === todo.userId);
  }
}
