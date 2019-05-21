import Event from "./eventInterface";
import directions from "../../constants/directions";
import objectController from "../../controllers/objectController";
import * as logger from "@larsire/common-logger";

export default class MoveEvent implements Event {
    constructor(callerId: string, direction: directions, distance: number, targetId?: string) {
        this.callerId = callerId;
        this.direction = direction;
        this.distance = distance;
        this.targetId = targetId;
    }
    callerId: string;
    direction: directions;
    distance: number;
    targetId: string;

    checkIfFieldIsAvailable(axisX, axisY) {
        let fieldIsEmpty = !objectController.getObjectByPosition(axisX, axisY)
        return axisX >= 0 && axisY >= 0 && fieldIsEmpty;
    }
    
    checkIfCanMove(movedObject, eventTargetId) {
        if(!movedObject) {
            return false;
        }
        if(movedObject.id === eventTargetId && !movedObject.alive) {
            return false;
        }
        return true;
    }

    async moveObject() {
        return new Promise((resolve) => {
            let eventTargetId = this.targetId || this.callerId;
            let movedObject = <any>objectController.getObjectById(eventTargetId);
            if (this.checkIfCanMove(movedObject, eventTargetId)) {
                switch (this.direction) {
                    case directions.up:
                        if (this.checkIfFieldIsAvailable(movedObject.position.axisX, movedObject.position.axisY - 1)) {
                            movedObject.position.axisY -= this.distance;
                            logger.info("Moved " + eventTargetId + " to " + movedObject.position.axisX + "," + movedObject.position.axisY + " !")
                        } else {
                            logger.error("Can't move " + eventTargetId + " to " + movedObject.position.axisX + "," + (movedObject.position.axisY - 1) + " !");
                        }
                        break;
                    case directions.right:
                        if (this.checkIfFieldIsAvailable(movedObject.position.axisX + 1, movedObject.position.axisY)) {
                            movedObject.position.axisX += this.distance;
                            logger.info("Moved " + eventTargetId + " to " + movedObject.position.axisX + "," + movedObject.position.axisY + " !")
                        } else {
                            logger.error("Can't move " + eventTargetId + " to " + (movedObject.position.axisX + 1) + "," + movedObject.position.axisY + " !");
                        }
                        break;
                    case directions.down:
                        if (this.checkIfFieldIsAvailable(movedObject.position.axisX, movedObject.position.axisY + 1)) {
                            movedObject.position.axisY += this.distance;
                            logger.info("Moved " + eventTargetId + " to " + movedObject.position.axisX + "," + movedObject.position.axisY + " !")
                        } else {
                            logger.error("Can't move " + eventTargetId + " to " + movedObject.position.axisX + "," + (movedObject.position.axisY + 1) + " !");
                        }
                        break;
                    case directions.left:
                        if (this.checkIfFieldIsAvailable(movedObject.position.axisX - 1, movedObject.position.axisY)) {
                            movedObject.position.axisX -= this.distance;
                            logger.info("Moved " + eventTargetId + " to " + movedObject.position.axisX + "," + movedObject.position.axisY + " !")
                        } else {
                            logger.error("Can't move " + eventTargetId + " to " + (movedObject.position.axisX - 1) + "," + movedObject.position.axisY + " !");
                        }
                        break;
                    default:
                        logger.error("Invalid direction : " + this.direction + " !");
                        break;
                        logger.info("Called by :" + this.callerId);
                }
            } else {
                logger.error("Invalid object to move !");
            }

            resolve();
        });
    }

    async action() {
        await this.moveObject();
    }
}
