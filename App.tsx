import { ApolloProvider } from "@apollo/client"
import { client } from "./utils/apollo";
import Base from "./components/index/Base";

export default function App() {

  return (
      <ApolloProvider client={client}>
        <Base />
      </ApolloProvider>
  );
}
