import { useMutation, useQuery } from "@apollo/client";
import { FormEvent, useState } from "react";
import todosQueries from "./graphql/todos";
import { GQLQuery, Todo } from "./types";

function App() {
  const [input, setInput] = useState("");

  const { data, loading } = useQuery<GQLQuery<Todo[], "todos">>(
    todosQueries.get
  );

  const [createTodo] = useMutation(todosQueries.create, { errorPolicy: "all" });

  const [removeTodo] = useMutation(todosQueries.remove);

  if (loading) {
    return <div>Carregando...</div>;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await createTodo({
      variables: { data: { name: input, doneAt: new Date(), userId: "0" } },
      refetchQueries: [todosQueries.get],
    });

    setInput("");
  }

  async function handleRemove(todo: Todo) {
    await removeTodo({
      variables: { id: todo.id },
      refetchQueries: [todosQueries.get],
    });
  }

  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>DoneAt</th>
          </tr>
        </thead>
        <tbody>
          {data?.todos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.doneAt}</td>
              <td>
                <button type="button" onClick={() => handleRemove(item)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
