import Event from "./eventInterface";
import objectController from "../../controllers/objectController";
import * as logger from "@larsire/common-logger";
import itemInterface from "../../items/itemInterface";
import creature from '../../creatures/creature';

export default class RemoveItemEvent implements Event {
    constructor(callerId: string, targetId: string, item: itemInterface) {
        this.callerId = callerId;
        this.targetId = targetId;
        this.item = item;
    }
    item: itemInterface;
    callerId: string;
    targetId: string;

    
    async removeItem() {
        return new Promise((resolve) => {
          let creature = <creature>objectController.getObjectById(this.targetId);
            creature.removeItem(this.item);
            
            resolve();
        });
    }

    async action() {
        await this.removeItem();
    }
}
