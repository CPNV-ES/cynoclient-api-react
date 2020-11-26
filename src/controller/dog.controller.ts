import { Request, Response } from "express";
import { getConnection } from "./db.controller";
import { Dog } from "../entity/Dog";

export async function getAll(req: Request, res: Response) {
	const connection = await getConnection();
	try {
		const dogs = await connection.getRepository(Dog).find();
		res.status(200).send(dogs);
	} catch (error) {
		res.status(404).send("Error");
	}
}

export async function get(req: Request, res: Response) {
	const connection = await getConnection();
	try {
		const dog = await connection.getRepository(Dog).findOne(req.params.dogId);
		res.status(200).send(dog);
	} catch (error) {
		res.status(404).send("Dog not found");
	}
}

export async function create(req: Request, res: Response) {
	const connection = await getConnection();
	try {
		await connection.getRepository(Dog).insert(req.body);
		res.status(200).send("OK");
	} catch (error) {
		console.log(error)
		res.status(404).send("Error while inserting Dog");
	}
}