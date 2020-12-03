import {Request, Response} from "express";
import {getConnection} from "./db.controller";
import {Client} from "../entity/Client";

export async function getAll(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        const clients = await connection.getRepository(Client).find({relations: ["locality"]});
        res.status(200).send(clients.map(convertObject));
    } catch(error) {
        res.status(404).send("Error");
    }
}
export async function get(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        const client = await connection.getRepository(Client).findOne(req.params.clientId, {relations: ["locality"]});
        res.status(200).send(convertObject(client));
    } catch(error) {
        res.status(404).send("Client not found");
    }
}
function convertObject(source) {
    return {...source, isFemale: !!source.female}
}