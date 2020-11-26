import {Request, Response} from "express";
import {getConnection} from "./db.controller";
import {Client} from "../entity/Client";

export async function getAll(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        const clients = await connection.getRepository(Client).find();
        res.status(200).send(clients);
    } catch(error) {
        res.status(404).send("Error");
    }
}

export async function get(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        const client = await connection.getRepository(Client).findOne(req.params.clientId);
        res.status(200).send(client);
    } catch(error) {
        res.status(404).send("Client not found");
    }
}

export async function create(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        await connection.getRepository(Client).insert(req.body);
        res.status(200).send("OK");
    } catch(error) {
        res.status(404).send("Error while insert client");
    }
}

export async function update(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        await connection.getRepository(Client).update(req.params.clientId, req.body);
        res.status(200).send("OK");
    } catch(error) {
        res.status(404).send("Error while insert client");
    }
}