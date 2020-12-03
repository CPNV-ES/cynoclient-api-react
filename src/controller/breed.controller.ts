import {Request, Response} from "express";
import {getConnection} from "./db.controller";
import {Breed} from "../entity/Breed";

export async function getAll(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        const diseases = await connection.getRepository(Breed).find();
        res.status(200).send(diseases);
    } catch(error) {
        res.status(404).send("Error");
    }
}

export async function get(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        const disease = await connection.getRepository(Breed).findOne(req.params.breedId);
        res.status(200).send(disease);
    } catch(error) {
        res.status(404).send("Disease not found");
    }
}

export async function create(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        await connection.getRepository(Breed).insert(req.body);
        res.status(200).send("OK");
    } catch(error) {
        res.status(404).send("Error while insert Disease");
    }
}

export async function update(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        await connection.getRepository(Breed).update(req.params.breedId, req.body);
        res.status(200).send("OK");
    } catch(error) {
        res.status(404).send("Error while update Disease");
    }
}

export async function remove(req: Request, res: Response) {
    const connection = await getConnection();
    try {
        await connection.getRepository(Breed).delete(req.params.breedId);
        res.status(200).send("OK");
    } catch(error) {
        res.status(404).send("Error while remove Disease");
    }
}