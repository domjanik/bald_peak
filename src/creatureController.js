"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creatureModel_1 = require("./models/creatureModel");
const logger = require("@larsire/common-logger");
const contants_1 = require("./utils/contants");
exports.creatureList = new Array();
function createNewCreature(objectId, maxLifetime) {
    exports.creatureList.push(new creatureModel_1.creatureModel(objectId, maxLifetime));
}
exports.createNewCreature = createNewCreature;
function getCreatureList() {
    logger.trace("Creature ID | Alive | Age | LT Left | X | Y");
    //temp consoleLog
    exports.creatureList.forEach((creature, index) => {
        logger.trace(index + "  |  " + creature.alive + "  |  " + creature.age + "   |   " + (creature.deathDate.getTime() - new Date().getTime()) + " | " + creature.position.axisX + " | " + creature.position.axisY);
    });
}
exports.getCreatureList = getCreatureList;
/*
temp Function
*/
function moveToRandom() {
    exports.creatureList.forEach((creature, index) => {
        if (creature.alive) {
            let direction;
            let tempDir = Math.floor(Math.random() * 4);
            if (tempDir == 0) {
                direction = contants_1.movementDirection.down;
            }
            else if (tempDir == 1) {
                direction = contants_1.movementDirection.up;
            }
            else if (tempDir == 2) {
                direction = contants_1.movementDirection.right;
            }
            else if (tempDir == 3) {
                direction = contants_1.movementDirection.left;
            }
            creature.move(direction);
        }
    });
}
exports.moveToRandom = moveToRandom;
function startMonitoring() {
    getCreatureList();
    let that = this;
    let intr = setInterval(function () {
        //that.getCreatureList();
        that.moveToRandom();
        if (!that.creatureList.find(creature => creature.alive)) {
            clearInterval(intr);
            logger.warn("All your creatures died");
        }
    }, 1000);
}
exports.startMonitoring = startMonitoring;
//# sourceMappingURL=creatureController.js.map