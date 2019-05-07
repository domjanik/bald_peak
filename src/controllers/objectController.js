"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creatureController_1 = require("./creatureController");
const obstacleController_1 = require("./obstacleController");
const socketConnection_1 = require("../communication/socketConnection");
class objectController {
    constructor() { }
    static getNewId() {
        const defaultIdLenght = 5;
        const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let newId = "";
        for (var i = 0; i < defaultIdLenght; i++)
            newId += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        return newId;
    }
    static getObjectById(id) {
        return this.getObjectList().find((creature) => {
            return creature.id === id;
        });
    }
    static getObjectList() {
        var objectList = new Array();
        objectList = objectList.concat(creatureController_1.default.getCreatureList());
        objectList = objectList.concat(obstacleController_1.default.getObstacleList());
        return objectList;
    }
    static getObjectByPosition(axisX, axisY) {
        return this.getObjectList().find((mapObj) => {
            return mapObj.position.axisX === axisX && mapObj.position.axisY === axisY;
        });
    }
    static updateView() {
        let lastObjectList = "";
        setInterval(() => {
            let currentList = this.getObjectList();
            let cStr = JSON.stringify(currentList);
            if (cStr !== lastObjectList) {
                lastObjectList = cStr;
                socketConnection_1.default.sendMessage('updateCreatureList', currentList);
            }
        }, 1000);
    }
}
exports.default = objectController;
//# sourceMappingURL=objectController.js.map