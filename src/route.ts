import * as localityController from "./controller/locality.controller";
import genericController from "./controller/generic.controller";
import { Application } from "express";

import {Client} from "./entity/Client";
import {Dog} from "./entity/Dog";
import {Disease} from "./entity/Disease";
import {Breed} from "./entity/Breed";
import {Service} from "./entity/Service";
import {Consultation} from "./entity/Consultation";

export function route(app: Application) {

    createResource(app, Client);
    createResource(app, Dog);
    createResource(app, Disease);
    createResource(app, Breed);
    createResource(app, Service);
    createResource(app, Consultation);

    app.route("/localities")
        .get(localityController.getAll)
        .post(localityController.create);
    app.route("/localities/:localityId")
        .get(localityController.get)
        .patch(localityController.update)
        .delete(localityController.remove);
}

function createResource(app, Model, name = Model.name) {
    const controller = genericController(Model);

    app.route("/"+name)
        .get(controller.getAll)
        .post(controller.create);
    app.route("/"+name+"/:id")
        .get(controller.get)
        .patch(controller.update)
        .delete(controller.remove);
}
