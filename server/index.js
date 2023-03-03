import express from 'express';
import Connection from './Database/Db.js';
import route from './Routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const Port = 5000;
Connection();
app.use(bodyParser.json( {extended : true}));
app.use(bodyParser.urlencoded( {extended : true}))

app.use(cors());
app.use('/', route);

app.listen (Port, ()=>console.log(`server is running on port ${Port}`))