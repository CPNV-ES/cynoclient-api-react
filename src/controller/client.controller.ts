import {Request, Response} from "express";

export async function getAll(req: Request, res: Response) {
    res.status(200).send(data.map(convertObject));
}
export async function get(req: Request, res: Response) {
    res.status(200).send(convertObject(data.find(client=>(client.id == parseInt(req.params.clientId)))));
}
function convertObject(source) {
    return {...source, isFemale: !!source.female}
}
        
var data = [
    {
        "id": 1,
        "firstname": "Loïc",
        "lastname": "Viret",
        "female": 0,
        "email": "loic.viret@gmail.com",
        "phone": "+41793440735",
        "street": "Près-les-Bois 26a",
        "id_locality": 3264
    },
    {
        "id": 2,
        "firstname": "Gaëlle",
        "lastname": "Ruppen",
        "female": 1,
        "email": "gaelle.ruppen@gmail.com",
        "phone": "+41763212367",
        "street": null,
        "id_locality": null
    },
    {
        "id": 3,
        "firstname": "Amael",
        "lastname": "Leibundgut",
        "female": 0,
        "email": "a.leibundgut11@gmail.com",
        "phone": "+41795792530",
        "street": null,
        "id_locality": null
    },
    {
        "id": 4,
        "firstname": "Elaine",
        "lastname": "Ordjonikidze",
        "female": 1,
        "email": "e.ordjoni@gmail.com",
        "phone": "+41767428489",
        "street": "Tunnel",
        "id_locality": 3269
    },
    {
        "id": 5,
        "firstname": "Stephanie",
        "lastname": "Baumann",
        "female": 1,
        "email": "fanelia@faneliart.fr",
        "phone": "+41767428489",
        "street": null,
        "id_locality": null
    },
    {
        "id": 6,
        "firstname": "Anne",
        "lastname": "Beguin",
        "female": 1,
        "email": "anne_beguin@yahoo.fr",
        "phone": "+41797758028",
        "street": null,
        "id_locality": null
    },
    {
        "id": 7,
        "firstname": "Aloïse",
        "lastname": "Hadji",
        "female": 1,
        "email": "aloisehadji@hotmail.com",
        "phone": "+41764175012",
        "street": null,
        "id_locality": 3282
    },
    {
        "id": 8,
        "firstname": "Pascale",
        "lastname": "Roulet Mariani",
        "female": 1,
        "email": "prm@citycable.ch",
        "phone": "+41765856320",
        "street": null,
        "id_locality": 3269
    },
    {
        "id": 9,
        "firstname": "Audrey",
        "lastname": "Beaud",
        "female": 1,
        "email": "audrey.beaud@lacoserv.com",
        "phone": "+41793580834",
        "street": null,
        "id_locality": 3282
    },
    {
        "id": 10,
        "firstname": "Emilie",
        "lastname": "Schaeffer",
        "female": 1,
        "email": "schaeffer.emilie@gmail.com",
        "phone": "+41797893093",
        "street": null,
        "id_locality": 3281
    },
    {
        "id": 11,
        "firstname": "Vanessa",
        "lastname": "Ciullo",
        "female": 1,
        "email": null,
        "phone": "+41791023258",
        "street": "Boulevard de la forêt 32",
        "id_locality": 3282
    },
    {
        "id": 12,
        "firstname": "Maxime",
        "lastname": "Dauvergne",
        "female": 0,
        "email": null,
        "phone": "+41786133317",
        "street": "Route de Marin 24",
        "id_locality": 3266
    }
];