import {Request, Response} from "express";
import {createConnection} from "typeorm";
import {Clients} from "../entity/Client";

export async function getAll(req: Request, res: Response) {
    const connection = await createConnection();
    const clients = await connection.getRepository(Clients).find();
    res.status(200).send({list: clients.map(convertObject)});
}
export async function get(req: Request, res: Response) {
    const connection = await createConnection();
    const client = await connection.getRepository(Clients).findOne(req.params.clientId);
    res.status(200).send(convertObject(client));
}
function convertObject(source) {
    return {...source, isFemale: !!source.female}
}