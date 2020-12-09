import { Request, Response } from "express";
import { getConnection } from "./db.controller";

export default (Model) => ({
	async getAll(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			let data;
			if (req.query.with)
				data = await connection.getRepository(Model).find({relations: req.query.with});
			else
				data = await connection.getRepository(Model).find();
			res.status(200).send(data);
		} catch (error) {
			console.log(error)
			res.status(404).send("Error");
		}
	},

	async get(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			let data;
			if (req.query.with)
				data = await connection.getRepository(Model).findOne(req.params.id, {relations: req.query.with});
			else
				data = await connection.getRepository(Model).findOne(req.params.id);
			res.status(200).send(data);
		} catch (error) {
			res.status(404).send(`${Model.name} not found`);
		}
	},

	async create(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			await connection.getRepository(Model).insert(req.body);
			res.status(200).send("OK");
		} catch (error) {
			console.log(error)
			res.status(404).send(`Error while inserting ${Model.name}`);
		}
	},

	async update(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			await connection.getRepository(Model).update(req.params.id, req.body);
			res.status(200).send("OK");
		} catch (error) {
			res.status(404).send(`Error while updating ${Model.name}`);
		}
	},
	async remove(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			await connection.getRepository(Model).delete(req.params.id);
			res.status(200).send("OK");
		} catch (error) {
			res.status(404).send(`Error while removing ${Model.name}`);
		}
	}
});