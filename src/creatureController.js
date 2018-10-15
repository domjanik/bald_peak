"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creatureModel_1 = require("./models/creatureModel");
const logger = require("@larsire/common-logger");
let creatureList = [];
function createNewCreature(maxLifetime) {
    creatureList.push(new creatureModel_1.creatureModel(maxLifetime));
}
exports.createNewCreature = createNewCreature;
function getCreatureList() {
    logger.trace("Creature ID | Alive | Age | LT Left");
    creatureList.forEach((creature, index) => {
        logger.trace(index + "  |  " + creature.alive + "  |  " + creature.age + "   |   " + (creature.deathDate.getTime() - new Date().getTime()));
    });
    return;
}
exports.getCreatureList = getCreatureList;
function startMonitoring() {
    getCreatureList();
    let intr = setInterval(function () {
        getCreatureList();
        if (!creatureList.find(creature => creature.alive)) {
            clearInterval(intr);
            logger.warn("All your creatures died");
        }
    }, 1000);
}
exports.startMonitoring = startMonitoring;
//# sourceMappingURL=creatureController.js.map