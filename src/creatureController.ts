import { creatureModel } from './models/creatureModel';
import * as logger from "@larsire/common-logger";
import { movementDirection } from "./utils/contants";

export let creatureList: Array<creatureModel> = new Array<creatureModel>();

export function createNewCreature(objectId, maxLifetime) {
    creatureList.push(new creatureModel(objectId, maxLifetime));
}

export function getCreatureList() {
    logger.trace("Creature ID | Alive | Age | LT Left | X | Y")
    //temp consoleLog
    creatureList.forEach((creature, index) => {
        logger.trace(index + "  |  " + creature.alive + "  |  " + creature.age + "   |   " + (creature.deathDate.getTime() - new Date().getTime()) + " | " + creature.position.axisX + " | " + creature.position.axisY)
    });
}

/*
temp Function
*/
export function moveToRandom() {
    creatureList.forEach((creature, index) => {
        if (creature.alive) {
            let direction;
            let tempDir = Math.floor(Math.random() * 4);
            if (tempDir == 0) {
                direction = movementDirection.down;
            }
            else if (tempDir == 1) {
                direction = movementDirection.up;
            }
            else if (tempDir == 2) {
                direction = movementDirection.right;
            }
            else if (tempDir == 3) {
                direction = movementDirection.left;
            }
            creature.move(direction);
        }
    });
}

export function startMonitoring() {
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
