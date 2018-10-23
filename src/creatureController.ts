import { creatureModel } from './models/creatureModel';
import * as logger from "@larsire/common-logger";
import { movementDirection } from "./utils/contants";

export class creatureController {
    public creatureList: creatureModel[] = [];

    public createNewCreature(maxLifetime) {
        this.creatureList.push(new creatureModel(maxLifetime));
    }

    public getCreatureList() {
        logger.trace("Creature ID | Alive | Age | LT Left | X | Y")
        //temp consoleLog
        this.creatureList.forEach((creature, index) => {
            logger.trace(index + "  |  " + creature.alive + "  |  " + creature.age + "   |   " + (creature.deathDate.getTime() - new Date().getTime()) + " | " + creature.position.axisX + " | " + creature.position.axisY)
        });
    }

    /*
    temp Function
    */
    public moveToRandom() {
        this.creatureList.forEach((creature, index) => {
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

    public startMonitoring() {
        this.getCreatureList();
        let that = this;

        let intr = setInterval(function () {
            that.getCreatureList();
            that.moveToRandom();
            if (!that.creatureList.find(creature => creature.alive)) {
                clearInterval(intr);
                logger.warn("All your creatures died");
            }
        }, 1000);
    }
}