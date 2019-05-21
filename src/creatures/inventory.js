"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class inventory {
    constructor() {
        this.equipped = {};
        this.equipment = new Array();
    }
    getNewInventoryId() {
        const defaultIdLenght = 5;
        const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let newId = "";
        for (var i = 0; i < defaultIdLenght; i++)
            newId += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        return newId;
    }
    equipItem(inventory_id, slotId) {
        let itemIndex = this.equipment.findIndex((item) => { return item.inventory_id === inventory_id; });
        if (itemIndex) {
            this.equipped[slotId] = this.equipment[itemIndex];
            this.equipment.splice(itemIndex, 1);
        }
    }
    unequpItem(slotId) {
        this.equipment.push({ ...this.equipped[slotId] });
        this.equipped[slotId] = null;
    }
    addToInventory(item) {
        item.inventory_id = this.getNewInventoryId();
        this.equipment.push(item);
    }
    getFromInventoryByItemId(itemId) {
        let itemIndex = this.equipment.findIndex((item) => { return item.id === itemId; });
        if (itemIndex) {
            return this.equipment[itemIndex];
        }
        return null;
    }
    removeFromInventory(inventory_id) {
        let itemIndex = this.equipment.findIndex((item) => { return item.inventory_id === inventory_id; });
        if (itemIndex) {
            this.equipment.splice(itemIndex, 1);
        }
    }
}
exports.default = inventory;
//# sourceMappingURL=inventory.js.map