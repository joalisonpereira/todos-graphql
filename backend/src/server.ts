import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import path from "node:path";
import { TodosResolver } from "./resolvers/todos.resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [TodosResolver],
    emitSchemaFile: path.resolve(__dirname, "../schema.gql"),
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen(4000);

  console.log(`Server running in ${url}`);
}

bootstrap();
