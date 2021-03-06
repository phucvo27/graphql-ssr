import React from 'react';
import { ApolloProvider } from '@apollo/client'
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import Layout from '../routes/Layout'
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Home from '../client/pages/Home/Home'
import Routes from '../client/Routes/routes';

export const App = (req, client, context) => {
  return (
    <ApolloProvider client={client}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </ApolloProvider>
  )
}

export default (req, client, context) => {
  // const content = renderToString(
  //   <ApolloProvider client={client}>
  //     <StaticRouter location={req.path} context={context}>
  //       <div>{renderRoutes(Routes)}</div>
  //     </StaticRouter>
  //   </ApolloProvider>
  // );
  const content = renderToString(App(req, client, context))
  const state = client.extract();
  //const helmet = Helmet.renderStatic();
  //<script src="bundle.js"></script>
  //<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

  return `
    <html>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css">
        <link rel="stylesheet" href="/static/css/styles.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
            window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};
        </script>
        <script src="/static/bundle.js" type="text/javascript"></script>
      </body>
    </html>
  `;
};

