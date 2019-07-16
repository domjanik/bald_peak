import eventQuery from "./eventQuery/eventQuery";
import runApi from './communication/api';
import socketConnection from './communication/socketConnection';
import objectController from "./controllers/objectController";

export async function initializeApplication() {
    let server = runApi();   
    socketConnection.createSocketConnection(server);
    eventQuery.startQuery();
    objectController.updateView();
}

