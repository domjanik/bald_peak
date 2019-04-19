"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventQuery_1 = require("./eventQuery/eventQuery");
const move_1 = require("./eventQuery/events/move");
const directions_1 = require("./constants/directions");
const creatureController_1 = require("./controllers/creatureController");
const human_1 = require("./creatures/human");
let query;
async function initializeApplication() {
    query = new eventQuery_1.eventQuery();
    creatureController_1.default.addCreature(new human_1.default({ name: "test1", position: { axisX: 0, axisY: 0 } }));
    creatureController_1.default.addCreature(new human_1.default({ name: "test2", position: { axisX: 0, axisY: 1 } }));
    setTimeout(() => {
        query.addEvent(new move_1.default(creatureController_1.default.creatureList[1].id, directions_1.default.left, 1));
        query.addEvent(new move_1.default(creatureController_1.default.creatureList[1].id, directions_1.default.up, 1));
    }, 5000);
}
exports.initializeApplication = initializeApplication;
//# sourceMappingURL=main.js.map