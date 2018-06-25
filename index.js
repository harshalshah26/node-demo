import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crm'

const app = express();
const port = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://harshal:abcdefg123@ds117431.mlab.com:17431/hs-authentication');

// body parsers
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (request, response) => {
    response.json({ data: 'Hello from Express!'});
})

app.use((err, request, response, next) => {
    // log the error, for now just console.log
    console.log("error middleware 1....");
    console.log(err)
    response.status(500).json({message: 'Internal Server Error'})
})

// register all routes
routes(app);

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
