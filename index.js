import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    HttpLink
} from '@apollo/client';
import React from 'react'
import { getDataFromTree } from "@apollo/react-ssr";
import fetch from 'cross-fetch'
import Express from 'express';
import { StaticRouter } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import Layout from './routes/Layout';
import Html from './helpers/Html';
import renderer, { App } from './helpers/renderer';
//import renderer from './helpers/renderer'
const app = Express();

app.get("/", (req, res) => {
    const client = new ApolloClient({
        ssrMode: true,
      // Remember that this is the interface the SSR server will use to connect to the
      // API server, so we need to ensure it isn't firewalled, etc
        
        link: new HttpLink({ uri: 'https://71z1g.sse.codesandbox.io/', fetch }),
        cache: new InMemoryCache(),
    });
  
    const context = {};
    getDataFromTree(App(req, client, context)).then(() => {
        // We are ready to render for real
        console.log('we have ')
        //const content = ReactDOMServer.renderToString(App(req, client, context));
        //const initialState = client.extract();
    
        //const html = <Html content={content} state={initialState} />;
        //const html = renderer(req, client, initialState);
        const html = renderer(req, client, context);
        // console.log(html)
        res.status(200);
        //res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
        res.send(html)
        res.end();
    }).catch(e => {

        console.log("we have an error");
        console.log(e)
    });
  })

app.listen(3000, ()=>{
    console.log('Node server is running at port 3000')
})