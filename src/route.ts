import * as pingController from "./controller/Ping.controller";
import {Application} from "express"

export function route(app: Application) {
  app.route("/ping")
    .get(pingController.get);
}
