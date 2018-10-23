"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("@larsire/common-logger");
class mapController {
    constructor(creatureMonitor) {
        this.width = 10;
        this.height = 10;
        if (!creatureMonitor) {
            logger.error("mapController : creatureController reference needed!");
            throw Error("mapController : creatureController reference needed!");
        }
        this.creatureMonitor = creatureMonitor;
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
    showMap() {
        console.log(this.creatureMonitor.creatureList);
        this.map.forEach((row) => {
            logger.info(row);
        });
    }
}
exports.mapController = mapController;
//# sourceMappingURL=mapController.js.map