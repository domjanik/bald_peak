import obstacleController from "../controllers/obstacleController";
import mapObject from "./mapObject";
import objectPosition from "./objectPosition";
import objectTypes from "./objectTypes";

export default class obstacles implements mapObject {
    constructor(axisX: number, axisY: number) {
        this.id = obstacleController.getNewId();
        this.position = new objectPosition();
        this.position.axisX = axisX;
        this.position.axisY = axisY;
    }
    id: string;
    position: objectPosition; 
    type = objectTypes.obstacle;
}