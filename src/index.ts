export * from './lib/async';
export * from './lib/number';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import * as routes from "./route";

dotenv.config();
const port = 3000;
const ip = "0.0.0.0";
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, ip);

routes.route(app);
