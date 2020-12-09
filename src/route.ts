import * as dogController from "./controller/dog.controller";
import * as breedController from "./controller/breed.controller";
import * as diseasesController from "./controller/diseases.controller";
import * as localityController from "./controller/locality.controller";
import genericController from "./controller/generic.controller";
import { Application } from "express";

import {Client} from "./entity/Client";
const clientController = genericController(Client)

export function route(app: Application) {
    app.route("/dogs")
        .get(dogController.getAll)
        .post(dogController.create);
    app.route("/dogs/:dogId")
        .get(dogController.get)
        .patch(dogController.update)
        .delete(dogController.remove);

    app.route("/clients")
        .get(clientController.getAll)
        .post(clientController.create);

    app.route("/clients/:clientId")
        .get(clientController.get)
        .patch(clientController.update)
        .delete(clientController.remove);

    app.route("/diseases")
        .get(diseasesController.getAll)
        .post(diseasesController.create);

    app.route("/diseases/:diseaseId")
        .get(diseasesController.get)
        .patch(diseasesController.update)
        .delete(diseasesController.remove);

    app.route("/breeds")
        .get(breedController.getAll)
        .post(breedController.create);

    app.route("/breeds/:breedId")
        .get(breedController.get)
        .patch(breedController.update)
        .delete(breedController.remove);

    app.route("/localities")
        .get(localityController.getAll)
        .post(localityController.create);
    app.route("/localities/:localityId")
        .get(localityController.get)
        .patch(localityController.update)
        .delete(localityController.remove);
}
