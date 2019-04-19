"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creatureController_1 = require("./creatureController");
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
        return objectList;
    }
    static getObjectByPosition(axisX, axisY) {
        return this.getObjectList().find((mapObj) => {
            return mapObj.position.axisX === axisX && mapObj.position.axisY === axisY;
        });
    }
}
exports.default = objectController;
//# sourceMappingURL=objectController.js.map