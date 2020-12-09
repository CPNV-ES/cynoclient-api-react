import { Request, Response } from "express";
import { getConnection } from "./db.controller";

export default (Model) => ({
	async getAll(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			const data = await connection.getRepository(Model).find();
			res.status(200).send(data);
		} catch (error) {
			res.status(404).send("Error");
		}
	},

	async get(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			const datum = await connection.getRepository(Model).findOne(req.params.id);
			res.status(200).send(datum);
		} catch (error) {
			res.status(404).send("Model not found");
		}
	},

	async create(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			await connection.getRepository(Model).insert(req.body);
			res.status(200).send("OK");
		} catch (error) {
			console.log(error)
			res.status(404).send("Error while inserting Model");
		}
	},

	async update(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			await connection.getRepository(Model).update(req.params.id, req.body);
			res.status(200).send("OK");
		} catch (error) {
			res.status(404).send("Error while update Model");
		}
	},
	async remove(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			await connection.getRepository(Model).delete(req.params.id);
			res.status(200).send("OK");
		} catch (error) {
			res.status(404).send("Error while remove Model");
		}
	}
});