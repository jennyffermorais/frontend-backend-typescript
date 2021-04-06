import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());// tem que ficar sempre antes das rotas
app.use(routes);

app.listen(3333);
