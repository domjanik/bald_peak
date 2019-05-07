import creatureController from "./creatureController";
import obstacleController from "./obstacleController";
import mapObject from "../objects/mapObject";
import creature from "../creatures/creature";
import socketConnection from "../communication/socketConnection";

export default class objectController {
    constructor() {} 

    static getNewId() {
        const defaultIdLenght = 5;
        const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let newId = "";
      
        for (var i = 0; i < defaultIdLenght; i++)
          newId += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      
        return newId;
    }

    static getObjectById(id: string) {
        return this.getObjectList().find((creature: creature) => {
            return creature.id === id;
        })
    }

    static getObjectList() {
        var objectList = new Array<mapObject>();
        objectList = objectList.concat(creatureController.getCreatureList());
        objectList = objectList.concat(obstacleController.getObstacleList());
        return objectList;
    }

    static getObjectByPosition(axisX, axisY) {
        return this.getObjectList().find((mapObj: mapObject) => {
            return mapObj.position.axisX === axisX && mapObj.position.axisY === axisY;
        });
    }

    static updateView() {
        let lastObjectList = "";

        setInterval(() => {
            let currentList = this.getObjectList();
            let cStr = JSON.stringify(currentList);
            if(cStr !== lastObjectList) {
                lastObjectList = cStr;
                socketConnection.sendMessage('updateCreatureList', currentList);
            }
        }, 1000);
    }
}