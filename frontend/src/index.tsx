import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import App from "./App";
import gqlClient from "./graphql";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={gqlClient}>
    <App />
  </ApolloProvider>
);
