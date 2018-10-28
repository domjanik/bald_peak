import * as logger from "@larsire/common-logger"
import { mapController } from '../mapController';
import { Event } from './event';
import { eventTypes } from "./constants";

let eventQuery: Event[] = [];
let loopWorking: boolean = false;

exports.addEvent = function (event: Event) {
    eventQuery.push(event);
    if (!loopWorking)
        startEventLoop();
}

function shouldContinueLoop() {
    return eventQuery.length > 0;
}

function executeEvent() {
    var event = eventQuery[0];
    switch(event.eventType){
        case eventTypes.move:
            mapController.moveObject(event.callerId, event.args.direction, event.args.distance);
        default:
            logger.error("Invalid event : " + JSON.stringify(event));
    }
}

function startEventLoop() {
    loopWorking = true;
    while (shouldContinueLoop()) {
        executeEvent();
    }
    loopWorking = false;
}