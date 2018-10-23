import { creatureModel } from './models/creatureModel';
import * as logger from "@larsire/common-logger";
import { creatureController } from './creatureController';

export class mapController {
    constructor(creatureMonitor: creatureController) {
        if (!creatureMonitor) {
            logger.error("mapController : creatureController reference needed!")
            throw Error("mapController : creatureController reference needed!");
        }
        this.creatureMonitor = creatureMonitor;
        this.generateMap();
    }
    private creatureMonitor: creatureController;
    public width: number = 10;
    public height: number = 10;
    public map: Array<any>;

    private generateMap() {
        this.map = [];
        for (let h = 1; h <= this.height; h++) {
            let row = [];
            for (let w = 1; w <= this.width; w++) {
                row.push("   ");
            }
            this.map.push(row);
        }
    }

    public drawMap(creatureList) {
        console.log(this.creatureMonitor.creatureList);
        this.map.forEach((row) => {
            logger.info(row);
        })
    }
}   