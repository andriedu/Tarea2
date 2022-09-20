
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRout from './routes/user.routes';
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use(userRout);

export default app;