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
			console.log(error);
			res.status(500).send("Error");
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
			console.log(error);
			res.status(500).send(`${Model.name} not found`);
		}
	},

	async create(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			await connection.getRepository(Model).insert(req.body);
			res.status(200).send("OK");
		} catch (error) {
			console.log(error)
			res.status(500).send(`Error while inserting ${Model.name}`);
		}
	},

	async update(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			// Do not use insert : it does not work with many-to-many relations
			// (typeorm is really amazing)
			await connection.getRepository(Model).save(req.body);
			res.status(200).send("OK");
		} catch (error) {
			console.log(error);
			res.status(500).send(`Error while updating ${Model.name}`);
		}
	},
	async remove(req: Request, res: Response) {
		const connection = await getConnection();
		try {
			await connection.getRepository(Model).delete(req.params.id);
			res.status(200).send("OK");
		} catch (error) {
			console.log(error);
			res.status(500).send(`Error while removing ${Model.name}`);
		}
	}
});
