"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = require("./creature");
const baseStats_1 = require("./baseStats");
class human extends creature_1.default {
    constructor(options) {
        super(options);
        this.name = options.name;
        this.baseStats = new baseStats_1.default(10, 10, 10, 10);
    }
}
exports.default = human;
//# sourceMappingURL=human.js.map