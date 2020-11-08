import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client'
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes'
const httpLink = createHttpLink({
    uri: "https://71z1g.sse.codesandbox.io/",
  });
  const cache = new InMemoryCache().restore(window.__APOLLO_STATE__); // we are going to use to manage our data (similar to rootReducer on redux )
  
const client = new ApolloClient({
    link: httpLink,
    cache,
});
console.log("================== Client Side store ==================")
console.log(window.__APOLLO_STATE__)
ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <BrowserRouter>
            {renderRoutes(Routes)}
        </BrowserRouter>
    </ApolloProvider>,
    document.querySelector('#root')
)
//ReactDOM.hydrate(<h1>Hello</h1>,document.querySelector('#root'))