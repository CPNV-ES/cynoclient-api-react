import * as pingController from "./controller/Ping.controller";
import * as dogController from "./controller/dog.controller";
import * as clientController from "./controller/client.controller";
import * as breedController from "./controller/breed.controller";
import * as diseasesController from "./controller/diseases.controller";
import { Application } from "express";

export function route(app: Application) {
    app.route("/ping")
        .get(pingController.get);

    app.route("/dogs")
        .get(dogController.get);

    app.route("/clients")
        .get(clientController.getAll);
    app.route("/clients/:clientId")
        .get(clientController.get);

    app.route("/diseases")
        .get(diseasesController.getAll)
        .post(diseasesController.create);

    app.route("/diseases/:diseaseId")
        .get(diseasesController.get)
        .patch(diseasesController.update)
        .delete(diseasesController.remove);

    app.route("/breed")
        .get(breedController.get);
}
