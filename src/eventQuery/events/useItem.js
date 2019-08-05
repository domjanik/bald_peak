"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectController_1 = require("../../controllers/objectController");
class UseItemEvent {
    constructor(callerId, targetId, item) {
        this.callerId = callerId;
        this.targetId = targetId;
        this.item = item;
    }
    async useItem() {
        return new Promise((resolve) => {
            let creature = objectController_1.default.getObjectById(this.targetId);
            creature.useItem(this.item);
            resolve();
        });
    }
    async action() {
        await this.useItem();
    }
}
exports.default = UseItemEvent;
//# sourceMappingURL=useItem.js.map