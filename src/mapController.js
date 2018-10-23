"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("@larsire/common-logger");
const _ = require("lodash");
class mapController {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.generateMap();
    }
    generateMap() {
        this.map = [];
        for (let h = 1; h <= this.height; h++) {
            let row = [];
            for (let w = 1; w <= this.width; w++) {
                row.push("   ");
            }
            this.map.push(row);
        }
    }
    drawMap(creatureList) {
        var mapToDraw = _.cloneDeep(this.map);
        logger.info("\n\n");
        creatureList.forEach((creature) => {
            mapToDraw[creature.position.axisY][creature.position.axisX] = (creature.alive ? " O " : " X ");
        });
        mapToDraw.forEach((row) => {
            logger.info(row);
        });
    }
}
exports.mapController = mapController;
//# sourceMappingURL=mapController.js.map