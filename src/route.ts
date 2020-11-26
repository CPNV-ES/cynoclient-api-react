import * as dogController from "./controller/dog.controller";
import * as clientController from "./controller/client.controller";
import * as breedController from "./controller/breed.controller";
import * as diseasesController from "./controller/diseases.controller";
import { Application } from "express";

export function route(app: Application) {
    app.route("/dogs")
        .get(dogController.get);

    app.route("/clients")
        .get(clientController.getAll)
        .post(clientController.create);

    app.route("/clients/:clientId")
        .get(clientController.get)
        .patch(clientController.update)
        .delete(clientController.remove);

    app.route("/breed")
        .get(breedController.get);

    app.route("/diseases")
        .get(diseasesController.get);
}
