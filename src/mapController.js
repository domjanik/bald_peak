"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("@larsire/common-logger");
const creatureController = require("./creatureController");
const contants_1 = require("./utils/contants");
const _ = require("lodash");
let width = 10;
let height = 10;
let map;
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
function getObjectById(objectId) {
    return creatureController.creatureList.find((creature) => { return creature.objectId === objectId; });
}
function isFieldEmpty(coordinateY, coordinateX) {
    if (map[coordinateY]) {
        console.log((map[coordinateY][coordinateX] === "   "));
        return map[coordinateY][coordinateX] === "   ";
    }
    else
        return false;
}
function moveObject(objectId, direction, distance) {
    let movedObject = getObjectById(objectId);
    for (let i = 0; i < distance; i++) {
        if (direction === contants_1.movementDirection.up) {
            if (movedObject.position.axisY > 0 && isFieldEmpty(movedObject.position.axisY - 1, movedObject.position.axisX))
                --movedObject.position.axisY;
        }
        else if (direction === contants_1.movementDirection.down) {
            if (movedObject.position.axisY < map.length && isFieldEmpty(movedObject.position.axisY + 1, movedObject.position.axisX))
                ++movedObject.position.axisY;
        }
        else if (direction === contants_1.movementDirection.left) {
            if (movedObject.position.axisX > 0 && isFieldEmpty(movedObject.position.axisY, movedObject.position.axisX - 1))
                --movedObject.position.axisX;
        }
        else if (direction === contants_1.movementDirection.right) {
            if (movedObject.position.axisX < map[0].length && isFieldEmpty(movedObject.position.axisY, movedObject.position.axisX + 1))
                ++movedObject.position.axisX;
        }
    }
}
exports.moveObject = moveObject;
function drawMap(creatureList) {
    var mapToDraw = _.cloneDeep(map);
    logger.info("\n\n");
    creatureList.forEach((creature) => {
        mapToDraw[creature.position.axisY][creature.position.axisX] = (creature.alive ? " O " : " X ");
    });
    mapToDraw.forEach((row) => {
        logger.info(row);
    });
}
exports.drawMap = drawMap;
generateMap();
//# sourceMappingURL=mapController.js.map