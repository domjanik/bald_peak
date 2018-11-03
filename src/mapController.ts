import { creatureModel } from './models/creatureModel';
import * as logger from "@larsire/common-logger";
import * as creatureController from './creatureController';
import { movementDirection } from "./utils/contants";
import * as _ from "lodash";

let width: number = 10;
let height: number = 10;
let map: Array<any>;

function generateMap() {
    logger.error("Creating map!");
    map = [];
    for (let h = 1; h <= height; h++) {
        let row = [];
        for (let w = 1; w <= width; w++) {
            row.push("   ");
        }
        map.push(row);
    }
}

function getObjectById(objectId: string) {
    return creatureController.creatureList.find((creature) => { return creature.objectId === objectId });
}

function isFieldEmpty(coordinateY, coordinateX) {
    if (map[coordinateY]) {
        console.log((map[coordinateY][coordinateX] === "   "));
        return map[coordinateY][coordinateX] === "   ";
    }
    else
        return false;
}

export function moveObject(objectId, direction, distance) {
    let movedObject = getObjectById(objectId);
    for (let i = 0; i < distance; i++) {
        if (direction === movementDirection.up) {
            if (movedObject.position.axisY > 0 && isFieldEmpty(movedObject.position.axisY - 1, movedObject.position.axisX))
                --movedObject.position.axisY;
        }
        else if (direction === movementDirection.down) {
            if (movedObject.position.axisY < map.length && isFieldEmpty(movedObject.position.axisY + 1, movedObject.position.axisX))
                ++movedObject.position.axisY;
        }
        else if (direction === movementDirection.left) {
            if (movedObject.position.axisX > 0 && isFieldEmpty(movedObject.position.axisY, movedObject.position.axisX - 1))
                --movedObject.position.axisX;
        }
        else if (direction === movementDirection.right) {
            if (movedObject.position.axisX < map[0].length && isFieldEmpty(movedObject.position.axisY, movedObject.position.axisX + 1))
                ++movedObject.position.axisX;
        }
    }
}

export function drawMap(creatureList: Array<creatureModel>) {
    var mapToDraw = _.cloneDeep(map);

    logger.info("\n\n")

    creatureList.forEach((creature) => {
        mapToDraw[creature.position.axisY][creature.position.axisX] = (creature.alive ? " O " : " X ")
    })
    mapToDraw.forEach((row) => {
        logger.info(row);
    })
}

generateMap();
