import * as logger from "@larsire/common-logger"
import { mapController } from '../mapController';
import { Event } from './event';
import { eventTypes } from "./constants";

let eventQuery: Event[] = [];
let loopWorking: boolean = false;

function shouldContinueLoop() {
    return eventQuery.length > 0;
}

function executeEvent() {
    var event = eventQuery[0];
    switch(event.eventType){
        case eventTypes.move:
            //mapController.moveObject(event.callerId, event.args.direction, event.args.distance);
            logger.trace("moving : " + JSON.stringify(event));
            break;
        default:
            logger.error("Invalid event : " + JSON.stringify(event));
            break;
    }
    eventQuery.splice(0, 1);
}

function startEventLoop() {
    loopWorking = true;
    while (shouldContinueLoop()) {
        executeEvent();
    }
    loopWorking = false;
}

export function addEvent (event: Event) {
    logger.trace(event);

    eventQuery.push(event);
    if (!loopWorking)
        startEventLoop();
}