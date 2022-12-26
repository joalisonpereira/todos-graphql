import { v4 } from "uuid";
import { Todo } from "../dtos/models/todo.model";

const users = [
  {
    id: v4(),
    name: "John",
  },
  {
    id: v4(),
    name: "Mary",
  },
];

const db = {
  users: [
    {
      id: users[0].id,
      name: "John",
    },
    {
      id: users[1].id,
      name: "John",
    },
  ],
  todos: [
    {
      id: v4(),
      name: "Learn something",
      doneAt: "2010-03-02",
      userId: users[0].id,
    },
    {
      id: v4(),
      name: "Learn something",
      doneAt: "2010-03-02",
      userId: users[1].id,
    },
    {
      id: v4(),
      name: "Learn something",
      doneAt: "2010-03-02",
      userId: users[1].id,
    },
  ],
};

export default db;
