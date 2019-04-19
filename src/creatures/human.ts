import creature from "./creature";
import objectPosition from "../objects/objectPosition";
import mapObject from "../objects/mapObject";

export default class human extends creature {
    constructor(options) {
        super(options);
        this.name = options.name;
    }
    name: string;
}