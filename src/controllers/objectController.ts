import creatureController from "./creatureController";
import mapObject from "../objects/mapObject";
import creature from "../creatures/creature";

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
        return objectList;
    }

    static getObjectByPosition(axisX, axisY) {
        return this.getObjectList().find((mapObj: mapObject) => {
            return mapObj.position.axisX === axisX && mapObj.position.axisY === axisY;
        });
    }
}