import {createConnection} from "typeorm";

let connectionPromise = null;

export function getConnection() {
    if (connectionPromise == null) {
        connectionPromise = createConnection();
    }

    return connectionPromise;
}