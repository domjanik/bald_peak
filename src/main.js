"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api/api");
async function initializeApplication() {
    api_1.default();
    // creatureController.addCreature(new human({name: "test1", position: { axisX: 0, axisY: 0}}));
    // creatureController.addCreature(new human({name: "test2", position: { axisX: 0, axisY: 1}}));
    // setTimeout(()=>{
    //     eventQuery.addEvent(new move(creatureController.creatureList[1].id, directions.left, 1))
    //     eventQuery.addEvent(new move(creatureController.creatureList[1].id, directions.up, 1))
    // }, 5000)
}
exports.initializeApplication = initializeApplication;
//# sourceMappingURL=main.js.map