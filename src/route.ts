import * as pingController from "./controller/pingController";

export function route(app) {
  app.route("/ping")
    .get(pingController.get);
}
