import {
    ApolloClient,
    InMemoryCache,
    HttpLink
} from '@apollo/client';
import { getDataFromTree } from "@apollo/react-ssr";
import fetch from 'cross-fetch'
import express from 'express';
import path from 'path'
import renderer, { App } from './helpers/renderer';
//import renderer from './helpers/renderer'
const app = express();

app.use("/static",express.static(path.resolve(__dirname, '..','client', 'public')));

app.get("*", (req, res) => {
    const client = new ApolloClient({
        ssrMode: true,
      // Remember that this is the interface the SSR server will use to connect to the
      // API server, so we need to ensure it isn't firewalled, etc
        
        link: new HttpLink({ uri: 'https://71z1g.sse.codesandbox.io/', fetch }),
        cache: new InMemoryCache(),
    });
  
    const context = {};
    getDataFromTree(App(req, client, context)).then(() => {
        const html = renderer(req, client, context);
        res.status(200);
        res.send(html)
    }).catch(e => {

        console.log("we have an error");
        console.log(e)
    });
  })

app.listen(3000, ()=>{
    console.log('Node server is running at port 3000')
})