"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = require("./creature");
class human extends creature_1.default {
    constructor(options) {
        super(options);
        this.name = options.name;
    }
}
exports.default = human;
//# sourceMappingURL=human.js.map