"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectPosition_1 = require("../objects/objectPosition");
const creatureController_1 = require("../controllers/creatureController");
const objectTypes_1 = require("../objects/objectTypes");
class creature {
    constructor(options) {
        this.age = 0;
        this.isAlive = true;
        this.type = objectTypes_1.default.creature;
        this.lifeTime = options.lifetime || 10;
        this.position = new objectPosition_1.default();
        if (options.position) {
            this.position.axisX = options.position.axisX;
            this.position.axisY = options.position.axisY;
        }
        this.id = creatureController_1.default.getNewId();
        this.startLiving();
    }
    increaseAge() {
        console.log("%s : %d / %d", this.id, this.age, this.lifeTime);
        console.log("Position : (%d, %d)", this.position.axisX, this.position.axisY);
        this.age++;
        if (this.age >= this.lifeTime) {
            this.isAlive = false;
        }
        else {
            setTimeout(() => {
                this.increaseAge();
            }, 1000);
        }
    }
    startLiving() {
        this.increaseAge();
    }
}
exports.default = creature;
//# sourceMappingURL=creature.js.map