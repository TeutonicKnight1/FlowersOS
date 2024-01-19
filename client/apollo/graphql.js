import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://5.35.82.107:3000/api/graphql', // Замените URL на ваш сервер GraphQL
  cache: new InMemoryCache(),
});

export default client;