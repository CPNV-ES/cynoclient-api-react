import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from 'express';
import "reflect-metadata";

import {route} from "./route";

const port = 3000;
const ip = "0.0.0.0";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

route(app);

app.listen(port, ip, () => {
    console.log(`Server is up and running on ${ip}:${port}`)
});
