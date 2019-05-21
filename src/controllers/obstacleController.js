"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectController_1 = require("./objectController");
const socketConnection_1 = require("../communication/socketConnection");
class obstacleController {
    static getNewId() {
        return objectController_1.default.getNewId();
    }
    static addObstacle(newObstacle) {
        this.obstacleList.push(newObstacle);
        socketConnection_1.default.sendMessage('updateObstacleList', this.getObstacleList());
    }
    static getObstacleList() {
        return this.obstacleList;
    }
}
obstacleController.obstacleList = new Array();
exports.default = obstacleController;
//# sourceMappingURL=obstacleController.js.map