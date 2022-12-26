import {
  Mutation,
  Query,
  Resolver,
  Arg,
  FieldResolver,
  Root,
} from "type-graphql";
import { v4 } from "uuid";
import { CreateTodoInput } from "../dtos/inputs/create-todo.input";
import { UpdateTodoInput } from "../dtos/inputs/update-todo.input";
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
  async createTodo(@Arg("data", { validate: false }) data: CreateTodoInput) {
    const todo = {
      id: v4(),
      name: data.name,
      doneAt: data.doneAt,
      userId: "0",
    };

    db.todos = [...db.todos, todo];

    return todo;
  }

  @Mutation(() => Boolean)
  async updateTodo(@Arg("data", { validate: false }) data: UpdateTodoInput) {
    db.todos = db.todos.map((item) => {
      if (data.id === item.id) {
        return { ...data, id: item.id };
      }

      return item;
    });

    return true;
  }

  @Mutation(() => Boolean)
  async removeTodo(@Arg("id") id: string) {
    db.todos = db.todos.filter((t) => t.id !== id);

    return true;
  }

  @FieldResolver(() => User)
  async user(@Root() todo: Todo) {
    return db.users.find((u) => u.id === todo.userId);
  }
}
