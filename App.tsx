import { ApolloProvider } from "@apollo/client"
import { client } from "./utils/apollo";
import Base from "./components/index/Base";
import { LogBox } from "react-native";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil';

export default function App() {

  LogBox.ignoreAllLogs() 

  return (
      <ApolloProvider client={client}>
        <RecoilRoot>
        <GestureHandlerRootView style={{flex: 1}}>
          <Base />
        </GestureHandlerRootView>
        </RecoilRoot>
      </ApolloProvider>
  );
}
