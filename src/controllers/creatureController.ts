import creature from "../creatures/creature";
import objectController from "./objectController";

export default class creatureController{
    static creatureList = new Array<creature>();
    
    static getNewId() {
        return objectController.getNewId();
    }

    static addCreature(newCreature: creature) {
        this.creatureList.push(newCreature);
    }

    static getCreatureList(){
        return this.creatureList;
    }
}