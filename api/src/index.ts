import express  from "express";
import routes from './routes/routes'
import "reflect-metadata";
import "./database/connection"
const app = express()
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(express.json());
app.use(routes);


app.listen(3000, () => console.log(`💻 - Running at http://localhost:3000`));
