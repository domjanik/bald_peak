import creature from "../creatures/creature";
import objectController from "./objectController";
import socketConnection from '../communication/socketConnection';

export default class creatureController{
    static creatureList = new Array<creature>();
    
    static getNewId() {
        return objectController.getNewId();
    }

    static addCreature(newCreature: creature) {
        this.creatureList.push(newCreature);
        socketConnection.sendMessage('updateCreatureList', this.getCreatureList());
    }

    static getCreatureList(){
        return this.creatureList;
    }
}