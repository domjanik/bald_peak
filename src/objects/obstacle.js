"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obstacleController_1 = require("../controllers/obstacleController");
const objectPosition_1 = require("./objectPosition");
const objectTypes_1 = require("./objectTypes");
class obstacles {
    constructor(axisX, axisY) {
        this.type = objectTypes_1.default.obstacle;
        this.id = obstacleController_1.default.getNewId();
        this.position = new objectPosition_1.default();
        this.position.axisX = axisX;
        this.position.axisY = axisY;
    }
}
exports.default = obstacles;
//# sourceMappingURL=obstacle.js.map