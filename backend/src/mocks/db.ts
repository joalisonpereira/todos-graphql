import { v4 } from "uuid";

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
      doneAt: new Date(),
      userId: users[0].id,
    },
    {
      id: v4(),
      name: "Learn something",
      doneAt: new Date(),
      userId: users[1].id,
    },
    {
      id: v4(),
      name: "Learn something",
      doneAt: new Date(),
      userId: users[1].id,
    },
    {
      id: v4(),
      name: "Learn something",
      doneAt: new Date(),
      userId: users[0].id,
    },
  ],
};

export default db;
