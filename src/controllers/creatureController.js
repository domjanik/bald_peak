"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectController_1 = require("./objectController");
class creatureController {
    static getNewId() {
        return objectController_1.default.getNewId();
    }
    static addCreature(newCreature) {
        this.creatureList.push(newCreature);
    }
    static getCreatureList() {
        return this.creatureList;
    }
}
creatureController.creatureList = new Array();
exports.default = creatureController;
//# sourceMappingURL=creatureController.js.map