import { ApolloClient, createHttpLink, ApolloLink, InMemoryCache, concat, Operation, NextLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        queryType: true,
        fields:{ 
          hello: {
            merge(existing, incoming){
              return incoming
            }
          },
          me: {
            merge(existing, incoming){
              return incoming
            }
          },
          getRideHistory: {
            merge(existing, incoming){
              return incoming
            }
          },
        }
      }
    }
  })

  const httpLink = createHttpLink({
    uri: 'http://192.168.100.85:4000/graphql',
  });


  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await AsyncStorage.getItem('accessToken')
     
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });
  
    

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    credentials: "include",
    cache,
  })


  

