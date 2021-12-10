import 'reflect-metadata'
import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { EventResolver } from './controllers/events'
const mongoose = require('mongoose');
const cors = require('cors');
const app:Application = express();
app.use(cors());
mongoose.connect('mongodb+srv://elham:0599832683@cluster0.ibsvr.mongodb.net/events?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log('connected to database');
}
);
async function main(){
    const schema = await buildSchema({
        resolvers: [EventResolver]
    })
    const server = new ApolloServer({
        schema,
    })
    server.applyMiddleware({app});
    app.listen(8080,()=>{
        console.log('server started on localhost:8080');
    })
}
main();
