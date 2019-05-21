import itemInterface from "./itemInterface";

export default class apple implements itemInterface {
    constructor(){
        this.name = "Apple";
        this.id = "APPLE_001";
        this.equiped = false;
    }
    name: string;
    id: string;
    inventory_id: string;
    equiped: boolean;
}