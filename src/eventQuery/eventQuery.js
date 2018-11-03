"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("@larsire/common-logger");
const mapController = require("../mapController");
const constants_1 = require("./constants");
let eventQuery = [];
let loopWorking = false;
function shouldContinueLoop() {
    return eventQuery.length > 0;
}
function executeEvent() {
    var event = eventQuery[0];
    switch (event.eventType) {
        case constants_1.eventTypes.move:
            mapController.moveObject(event.callerId, event.args.direction, event.args.distance);
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
function addEvent(event) {
    eventQuery.push(event);
    if (!loopWorking)
        startEventLoop();
}
exports.addEvent = addEvent;
//# sourceMappingURL=eventQuery.js.map