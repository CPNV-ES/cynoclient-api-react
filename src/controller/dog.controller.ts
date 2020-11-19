import {Request, Response} from "express";

export async function get(req: Request, res: Response) {
	res.status(200).send({list: data});
}

var data = [
	{
		"id": 1,
		"noun": "Luna",
		"female": 1,
		"birthdate": "2010-12-15",
		"sterilized": 1,
		"chemical": 0,
		"color": "Noir et blanc",
		"dead": 0,
		"id_client": 1,
		"breed": 7,
		"crossbreed": null
	},
	{
		"id": 2,
		"noun": "Lucas",
		"female": 0,
		"birthdate": "2013-06-01",
		"sterilized": 1,
		"chemical": 0,
		"color": null,
		"dead": 0,
		"id_client": 2,
		"breed": 24,
		"crossbreed": 338
	},
	{
		"id": 3,
		"noun": "Naya",
		"female": 1,
		"birthdate": "2017-10-16",
		"sterilized": 0,
		"chemical": 0,
		"color": "Roux",
		"dead": 0,
		"id_client": 3,
		"breed": 30,
		"crossbreed": null
	},
	{
		"id": 4,
		"noun": "Gigi",
		"female": 1,
		"birthdate": "2014-01-01",
		"sterilized": 1,
		"chemical": 0,
		"color": "Roux",
		"dead": 0,
		"id_client": 4,
		"breed": 29,
		"crossbreed": 338
	},
	{
		"id": 5,
		"noun": "Metsä",
		"female": 1,
		"birthdate": "2017-01-01",
		"sterilized": 1,
		"chemical": 0,
		"color": "Noir et blanc",
		"dead": 0,
		"id_client": 4,
		"breed": 61,
		"crossbreed": 220
	},
	{
		"id": 6,
		"noun": "Lutin",
		"female": 0,
		"birthdate": "2016-01-01",
		"sterilized": 1,
		"chemical": 1,
		"color": "Merle",
		"dead": 1,
		"id_client": 5,
		"breed": 26,
		"crossbreed": null
	},
	{
		"id": 7,
		"noun": "Doogy",
		"female": 0,
		"birthdate": "2015-06-01",
		"sterilized": 1,
		"chemical": 0,
		"color": "Blanc",
		"dead": 0,
		"id_client": 6,
		"breed": 98,
		"crossbreed": 338
	},
	{
		"id": 8,
		"noun": "Titus",
		"female": 0,
		"birthdate": "2018-10-01",
		"sterilized": 1,
		"chemical": 0,
		"color": "Gris",
		"dead": 1,
		"id_client": 7,
		"breed": 24,
		"crossbreed": 338
	},
	{
		"id": 9,
		"noun": "Homer",
		"female": 0,
		"birthdate": "2019-02-01",
		"sterilized": 1,
		"chemical": 0,
		"color": "Gris",
		"dead": 0,
		"id_client": 8,
		"breed": 134,
		"crossbreed": null
	},
	{
		"id": 10,
		"noun": "Oops",
		"female": 0,
		"birthdate": "2019-08-01",
		"sterilized": 0,
		"chemical": 0,
		"color": "Brun",
		"dead": 0,
		"id_client": 9,
		"breed": 43,
		"crossbreed": null
	},
	{
		"id": 11,
		"noun": "Tiama",
		"female": 1,
		"birthdate": "2019-11-01",
		"sterilized": 1,
		"chemical": 0,
		"color": "Gris",
		"dead": 0,
		"id_client": 10,
		"breed": 338,
		"crossbreed": null
	},
	{
		"id": 12,
		"noun": "Blue",
		"female": 0,
		"birthdate": "2020-01-01",
		"sterilized": 0,
		"chemical": 0,
		"color": "Blanc",
		"dead": 0,
		"id_client": 11,
		"breed": 31,
		"crossbreed": null
	},
	{
		"id": 13,
		"noun": "Raku",
		"female": 0,
		"birthdate": "2020-08-13",
		"sterilized": 0,
		"chemical": 0,
		"color": "Blanc",
		"dead": 0,
		"id_client": 12,
		"breed": 31,
		"crossbreed": null
	}
];