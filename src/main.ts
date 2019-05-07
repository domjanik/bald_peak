import eventQuery from "./eventQuery/eventQuery";
import move from "./eventQuery/events/move";
import directions from "./constants/directions";
import creatureController from "./controllers/creatureController";
import human from "./creatures/human";
import runApi from './communication/api';
import socketConnection from './communication/socketConnection';
import objectController from "./controllers/objectController";

export async function initializeApplication() {
    let server = runApi();   
    socketConnection.createSocketConnection(server);
    eventQuery.startQuery();
    objectController.updateView();
}

