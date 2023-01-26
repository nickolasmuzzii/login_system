import express  from "express";
import routes from './routes/routes'
import "reflect-metadata";
import "./database/connection"
const app = express()

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("💻 - Running at http://localhost:3000"));
