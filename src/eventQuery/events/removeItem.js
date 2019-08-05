"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectController_1 = require("../../controllers/objectController");
class RemoveItemEvent {
    constructor(callerId, targetId, item) {
        this.callerId = callerId;
        this.targetId = targetId;
        this.item = item;
    }
    async removeItem() {
        return new Promise((resolve) => {
            let creature = objectController_1.default.getObjectById(this.targetId);
            creature.removeItem(this.item);
            resolve();
        });
    }
    async action() {
        await this.removeItem();
    }
}
exports.default = RemoveItemEvent;
//# sourceMappingURL=removeItem.js.map