import itemInterface from "../items/itemInterface";

export default class inventory {
    constructor() {
        this.equipped = {}
        this.equipment = new Array<itemInterface>();
        this.maxInventorySize = 10;
    }
    private equipped: {};

    equipment: itemInterface[];
    maxInventorySize: number;

    getNewInventoryId(): string {
        const defaultIdLenght = 5;
        const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let newId = "";
      
        for (var i = 0; i < defaultIdLenght; i++)
          newId += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        
        return newId;
    }

    equipItem(inventory_id, slotId): void {
        let itemIndex = this.equipment.findIndex((item: itemInterface) => { return item.inventory_id === inventory_id});
        if(itemIndex) {
            this.equipped[slotId] = this.equipment[itemIndex];
            this.equipment.splice(itemIndex, 1);
        }
    }

    unequpItem(slotId): void {
        this.equipment.push({...this.equipped[slotId]});
        this.equipped[slotId] = null;
    }

    useItem(item: itemInterface): void {
        if(item.action) {
            item.action();
        }
    }

    addToInventory(item): void {
        if(this.equipment.length < this.maxInventorySize) {
            item.inventory_id = this.getNewInventoryId();
            this.equipment.push(item);
        } else {
            throw new Error("Inventory is full");            
        }
    }

    getFromInventoryByItemId(itemId): itemInterface {
        let itemIndex = this.equipment.findIndex((item: itemInterface) => { return item.id === itemId});
        if(itemIndex) {
            return this.equipment[itemIndex];
        }
        return null;
    }

    removeFromInventory(inventory_id): void {
        let itemIndex = this.equipment.findIndex((item: itemInterface) => { return item.inventory_id === inventory_id});
        if(itemIndex) {
            this.equipment.splice(itemIndex, 1);
        }
    }
}