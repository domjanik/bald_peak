import obstacle from "../objects/obstacle";
import objectController from "./objectController";
import socketConnection from '../communication/socketConnection';

export default class obstacleController {
    static obstacleList = new Array<obstacle>();
    
    static getNewId() {
        return objectController.getNewId();
    }

    static addObstacle(newObstacle: obstacle) {
        this.obstacleList.push(newObstacle);
        socketConnection.sendMessage('updateObstacleList', this.getObstacleList());
    }

    static getObstacleList(){
        return this.obstacleList;
    }
}