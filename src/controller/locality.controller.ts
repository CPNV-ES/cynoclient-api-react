import { Request, Response } from "express";
import { getConnection } from "./db.controller";
import { Locality } from "../entity/Locality";

export async function getAll(req: Request, res: Response) {
	const connection = await getConnection();
	try {
		if (req.query.seek) {
			if (isNaN(parseInt(req.query.seek + ""))) {
				var whereClause = "locality.noun LIKE :val"
			} else {
				var whereClause = "locality.zip LIKE :val"
			}
			var localities = await connection.getRepository(Locality)
				.createQueryBuilder("locality")
				.where(whereClause, { val: `${req.query.seek}%` })
				.limit(req.query.limit || 10)
				.getMany();
		} else {
			var localities = await connection.getRepository(Locality).find();
		}
		res.status(200).send(localities);
	} catch (error) {
		res.status(404).send("Error");
	}
}

export async function get(req: Request, res: Response) {
	const connection = await getConnection();
	try {
		const locality = await connection.getRepository(Locality).findOne(req.params.localityId);
		res.status(200).send(locality);
	} catch (error) {
		res.status(404).send("Locality not found");
	}
}

export async function create(req: Request, res: Response) {
	const connection = await getConnection();
	try {
		await connection.getRepository(Locality).insert(req.body);
		res.status(200).send("OK");
	} catch (error) {
		console.log(error)
		res.status(404).send("Error while inserting Locality");
	}
}
export async function update(req: Request, res: Response) {
	const connection = await getConnection();
	try {
		await connection.getRepository(Locality).update(req.params.localityId, req.body);
		res.status(200).send("OK");
	} catch (error) {
		res.status(404).send("Error while update Locality");
	}
}

export async function remove(req: Request, res: Response) {
	const connection = await getConnection();
	try {
		await connection.getRepository(Locality).delete(req.params.localityId);
		res.status(200).send("OK");
	} catch (error) {
		res.status(404).send("Error while remove Locality");
	}
}