'use strict';

import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface('http://localhost:3012/graphql');

const client = new ApolloClient({
  networkInterface,
});

export default client;
