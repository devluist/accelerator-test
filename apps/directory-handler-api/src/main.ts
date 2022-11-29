import * as express from 'express';
import { indexRouter } from './routers';
import { dirsRouter } from './routers/dirs';
import * as cors from 'cors';


const app = express();

app.use(cors({origin: '*'})) // not safe for production, just for dev purposes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api/fetch-folder', dirsRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
