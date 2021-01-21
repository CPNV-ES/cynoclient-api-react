import genericController from "./controller/generic.controller";
import { Application } from "express";

import {Client} from "./entity/Client";
import {Dog} from "./entity/Dog";
import {Disease} from "./entity/Disease";
import {Breed} from "./entity/Breed";
import {Service} from "./entity/Service";
import {Consultation} from "./entity/Consultation";
import {Locality} from "./entity/Locality";
import {Client_take_service} from "./entity/Client_take_service";

export function route(app: Application) {

    createResource(app, Client, "clients");
    createResource(app, Dog, "dogs");
    createResource(app, Disease, "diseases");
    createResource(app, Breed, "breeds");
    createResource(app, Service, "services");
    createResource(app, Consultation, "consultations");
    createResource(app, Locality, "localities");
    createResource(app, Client_take_service, "clients_take_services");
}

function createResource(app, Model, name) {
    const controller = genericController(Model);

    app.route(`/${name}`)
        .get(controller.getAll)
        .post(controller.create);
    app.route(`/${name}/:id`)
        .get(controller.get)
        .patch(controller.update)
        .delete(controller.remove);
}
