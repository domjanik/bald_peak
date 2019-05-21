"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const directions_1 = require("../../constants/directions");
const objectController_1 = require("../../controllers/objectController");
const logger = require("@larsire/common-logger");
class MoveEvent {
    constructor(callerId, direction, distance, targetId) {
        this.callerId = callerId;
        this.direction = direction;
        this.distance = distance;
        this.targetId = targetId;
    }
    checkIfFieldIsAvailable(axisX, axisY) {
        let fieldIsEmpty = !objectController_1.default.getObjectByPosition(axisX, axisY);
        return axisX >= 0 && axisY >= 0 && fieldIsEmpty;
    }
    checkIfCanMove(movedObject, eventTargetId) {
        if (!movedObject) {
            return false;
        }
        if (movedObject.id === eventTargetId && !movedObject.alive) {
            return false;
        }
        return true;
    }
    async moveObject() {
        return new Promise((resolve) => {
            let eventTargetId = this.targetId || this.callerId;
            let movedObject = objectController_1.default.getObjectById(eventTargetId);
            if (this.checkIfCanMove(movedObject, eventTargetId)) {
                switch (this.direction) {
                    case directions_1.default.up:
                        if (this.checkIfFieldIsAvailable(movedObject.position.axisX, movedObject.position.axisY - 1)) {
                            movedObject.position.axisY -= this.distance;
                            logger.info("Moved " + eventTargetId + " to " + movedObject.position.axisX + "," + movedObject.position.axisY + " !");
                        }
                        else {
                            logger.error("Can't move " + eventTargetId + " to " + movedObject.position.axisX + "," + (movedObject.position.axisY - 1) + " !");
                        }
                        break;
                    case directions_1.default.right:
                        if (this.checkIfFieldIsAvailable(movedObject.position.axisX + 1, movedObject.position.axisY)) {
                            movedObject.position.axisX += this.distance;
                            logger.info("Moved " + eventTargetId + " to " + movedObject.position.axisX + "," + movedObject.position.axisY + " !");
                        }
                        else {
                            logger.error("Can't move " + eventTargetId + " to " + (movedObject.position.axisX + 1) + "," + movedObject.position.axisY + " !");
                        }
                        break;
                    case directions_1.default.down:
                        if (this.checkIfFieldIsAvailable(movedObject.position.axisX, movedObject.position.axisY + 1)) {
                            movedObject.position.axisY += this.distance;
                            logger.info("Moved " + eventTargetId + " to " + movedObject.position.axisX + "," + movedObject.position.axisY + " !");
                        }
                        else {
                            logger.error("Can't move " + eventTargetId + " to " + movedObject.position.axisX + "," + (movedObject.position.axisY + 1) + " !");
                        }
                        break;
                    case directions_1.default.left:
                        if (this.checkIfFieldIsAvailable(movedObject.position.axisX - 1, movedObject.position.axisY)) {
                            movedObject.position.axisX -= this.distance;
                            logger.info("Moved " + eventTargetId + " to " + movedObject.position.axisX + "," + movedObject.position.axisY + " !");
                        }
                        else {
                            logger.error("Can't move " + eventTargetId + " to " + (movedObject.position.axisX - 1) + "," + movedObject.position.axisY + " !");
                        }
                        break;
                    default:
                        logger.error("Invalid direction : " + this.direction + " !");
                        break;
                        logger.info("Called by :" + this.callerId);
                }
            }
            else {
                logger.error("Invalid object to move !");
            }
            resolve();
        });
    }
    async action() {
        await this.moveObject();
    }
}
exports.default = MoveEvent;
//# sourceMappingURL=move.js.map