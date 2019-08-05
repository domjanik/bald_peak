"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectController_1 = require("../../controllers/objectController");
const databaseAccess_1 = require("../../databaseAccess/databaseAccess");
class AddItemEvent {
    constructor(callerId, targetId, itemId) {
        this.callerId = callerId;
        this.targetId = targetId;
        this.itemId = itemId;
    }
    async addItem() {
        return new Promise((resolve) => {
            let creature = objectController_1.default.getObjectById(this.targetId);
            let item = databaseAccess_1.default.select("items", { "itemId": this.itemId });
            creature.addItem(item);
            resolve();
        });
    }
    async action() {
        await this.addItem();
    }
}
exports.default = AddItemEvent;
//# sourceMappingURL=addItem.js.map