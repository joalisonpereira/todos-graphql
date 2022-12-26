import { gql } from "@apollo/client";

const todosQueries = {
  get: gql`
    query GetTodos {
      todos {
        id
        name
        doneAt
      }
    }
  `,

  create: gql`
    mutation CreateTodo($data: CreateTodoInput!) {
      createTodo(data: $data) {
        id
        name
      }
    }
  `,

  remove: gql`
    mutation RemoveTodo($id: String!) {
      removeTodo(id: $id)
    }
  `,
};

export default todosQueries;
