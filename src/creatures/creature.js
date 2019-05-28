"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectPosition_1 = require("../objects/objectPosition");
const creatureController_1 = require("../controllers/creatureController");
const objectTypes_1 = require("../objects/objectTypes");
const eventQuery_1 = require("../eventQuery/eventQuery");
const baseStats_1 = require("./baseStats");
const move_1 = require("../eventQuery/events/move");
const inventory_1 = require("./inventory");
let hungerLimit = 100;
class creature {
    constructor(options) {
        this.age = 0;
        this.isAlive = true;
        this.type = objectTypes_1.default.creature;
        this.lifeTime = options.lifetime || 100;
        this.position = new objectPosition_1.default();
        if (options.position) {
            this.position.axisX = options.position.axisX;
            this.position.axisY = options.position.axisY;
        }
        this.speed = options.speed || 1;
        this.id = creatureController_1.default.getNewId();
        this.hunger = 0;
        this.baseStats = new baseStats_1.default();
        this.startLiving();
        this.inventory = new inventory_1.default();
    }
    move(direction) {
        if (this.isAlive) {
            eventQuery_1.default.addEvent(new move_1.default(this.id, direction, this.speed));
        }
    }
    increaseAge() {
        console.log("%s : %d / %d, H : %d", this.id, this.age, this.lifeTime, this.hunger);
        console.log("Position : (%d, %d)", this.position.axisX, this.position.axisY);
        this.age++;
        this.hunger++;
        if (this.age >= this.lifeTime || this.hunger === hungerLimit) {
            this.isAlive = false;
            console.log("Creature %s has died.", this.id);
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