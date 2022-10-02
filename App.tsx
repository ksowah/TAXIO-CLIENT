import { ApolloProvider } from "@apollo/client"
import { client } from "./utils/apollo";
import Base from "./components/index/Base";
import { LogBox } from "react-native";
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {

  LogBox.ignoreAllLogs() 

  return (
      <ApolloProvider client={client}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Base />
        </GestureHandlerRootView>
      </ApolloProvider>
  );
}
