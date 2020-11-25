import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from 'express';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

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



// Example
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
