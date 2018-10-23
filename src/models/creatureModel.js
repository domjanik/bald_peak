"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("@larsire/common-logger");
const contants_1 = require("../utils/contants");
const creaturePosition_1 = require("./creatureParameters/creaturePosition");
class creatureModel {
    constructor(maximumLifetime) {
        this.movementSpeed = 1;
        this.alive = false;
        this.age = 0;
        this.maximumLifetime = maximumLifetime || 8;
        this.startLife();
    }
    startLife() {
        logger.warn("Born!");
        this.position = new creaturePosition_1.creaturePosition(0, 0);
        this.birthDay = new Date();
        this.deathDate = this.birthDay;
        this.deathDate.setSeconds(this.deathDate.getSeconds() + this.maximumLifetime);
        this.alive = true;
        this.checkLife();
    }
    checkLife() {
        let currentDate = new Date();
        if (this.alive && (currentDate.getTime() < this.deathDate.getTime())) {
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
    move(direction, speedModifier = 1) {
        if (direction === contants_1.movementDirection.down) {
            this.position.axisY -= this.movementSpeed * speedModifier;
        }
        else if (direction === contants_1.movementDirection.up) {
            this.position.axisY += this.movementSpeed * speedModifier;
        }
        else if (direction === contants_1.movementDirection.left) {
            this.position.axisX -= this.movementSpeed * speedModifier;
        }
        else if (direction === contants_1.movementDirection.right) {
            this.position.axisX += this.movementSpeed * speedModifier;
        }
    }
}
exports.creatureModel = creatureModel;
//# sourceMappingURL=creatureModel.js.map