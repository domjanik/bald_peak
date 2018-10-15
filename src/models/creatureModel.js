"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("@larsire/common-logger");
class creatureModel {
    constructor(maximumLifetime) {
        this.alive = false;
        this.age = 0;
        this.maximumLifetime = maximumLifetime || 8;
        this.startLife();
    }
    startLife() {
        logger.warn("Born!");
        this.birthDay = new Date();
        this.deathDate = this.birthDay;
        this.deathDate.setSeconds(this.deathDate.getSeconds() + this.maximumLifetime);
        this.alive = true;
        this.checkLife();
    }
    checkLife() {
        let currentDate = new Date();
        if (currentDate.getTime() < this.deathDate.getTime()) {
            //if (currentDate.getTime() - this.birthDay.getTime() % 10 === 0) {
            this.age++;
            //}
            setTimeout(() => this.checkLife(), 1000);
        }
        else {
            this.alive = false;
            logger.warn("Death!");
        }
    }
}
exports.creatureModel = creatureModel;
//# sourceMappingURL=creatureModel.js.map