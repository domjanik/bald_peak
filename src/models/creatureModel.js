"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("@larsire/common-logger");
const creaturePosition_1 = require("./creatureParameters/creaturePosition");
const eventQuery_1 = require("../eventQuery/eventQuery");
const event_1 = require("../eventQuery/event");
const constants_1 = require("../eventQuery/constants");
class creatureModel {
    constructor(maximumLifetime) {
        this.objectId = "";
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
        let moveEvent = new event_1.Event(this.objectId, constants_1.eventTypes.move, { direction: direction, distance: (1 * speedModifier) });
        eventQuery_1.addEvent(moveEvent);
        // if (direction === movementDirection.down) {
        //     if (this.position.axisY > 0)
        //         this.position.axisY -= this.movementSpeed * speedModifier;
        // }
        // else if (direction === movementDirection.up) {
        //     this.position.axisY += this.movementSpeed * speedModifier;
        // }
        // else if (direction === movementDirection.left) {
        //     if (this.position.axisX > 0)
        //         this.position.axisX -= this.movementSpeed * speedModifier;
        // }
        // else if (direction === movementDirection.right) {
        //     this.position.axisX += this.movementSpeed * speedModifier;
        // }
    }
}
exports.creatureModel = creatureModel;
//# sourceMappingURL=creatureModel.js.map