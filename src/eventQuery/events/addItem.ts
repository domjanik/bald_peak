import Event from "./eventInterface";
import objectController from "../../controllers/objectController";
import * as logger from "@larsire/common-logger";
import itemInterface from "../../items/itemInterface";
import creature from '../../creatures/creature';
import databaseAccess from '../../databaseAccess/databaseAccess';

export default class AddItemEvent implements Event {
    constructor(callerId: string, targetId: string, itemId: string) {
        this.callerId = callerId;
        this.targetId = targetId;
        this.itemId = itemId;
    }
    itemId: string;
    callerId: string;
    targetId: string;

    
    async addItem() {
        return new Promise((resolve) => {
            let creature = <creature>objectController.getObjectById(this.targetId);
            let item = <itemInterface>databaseAccess.select("items", {"itemId": this.itemId});
            creature.addItem(item);
            
            resolve();
        });
    }

    async action() {
        await this.addItem();
    }
}
