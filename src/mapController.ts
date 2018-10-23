import { creatureModel } from './models/creatureModel';
import * as logger from "@larsire/common-logger";
import { creatureController } from './creatureController';

export class mapController {
    constructor() {
        this.generateMap();
    }
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
        console.log(creatureList);
        this.map.forEach((row) => {
            logger.info(row);
        })
    }
}   