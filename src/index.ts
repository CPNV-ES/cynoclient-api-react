import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";


import {route} from "./route";

dotenv.config();

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



//example I think
import "reflect-metadata";
import {createConnection} from "typeorm";
import {Client} from "./entity/Client";
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const client = new Client();
    client.firstname = "Timber";
    client.lastname = "Saw";
    client.email = "test@test.test";
    await connection.manager.save(client);
    console.log("Saved a new user with id: " + client.id);

    console.log("Loading users from the database...");
    const clients = await connection.manager.find(Client);
    console.log("Loaded users: ", clients);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
