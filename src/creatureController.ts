import { creatureModel } from './models/creatureModel';
import * as logger from "@larsire/common-logger";

let creatureList: creatureModel[] = [];

export function createNewCreature(maxLifetime) {
    creatureList.push(new creatureModel(maxLifetime));
}

export function getCreatureList() {
    logger.trace("Creature ID | Alive | Age | LT Left")
    creatureList.forEach((creature, index) => {
        logger.trace(index + "  |  " + creature.alive + "  |  " + creature.age + "   |   " + (creature.deathDate.getTime() - new Date().getTime()) )
    });
    return;
}

export function startMonitoring() {
    getCreatureList();
    let intr = setInterval(function(){
        getCreatureList()
        if(!creatureList.find(creature => creature.alive)){
            clearInterval(intr);
            logger.warn("All your creatures died");
        }
    },1000);
}