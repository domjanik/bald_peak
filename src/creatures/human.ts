import creature from "./creature";
import objectPosition from "../objects/objectPosition";
import mapObject from "../objects/mapObject";
import baseStats from './baseStats';

export default class human extends creature {
    constructor(options) {
        super(options);
        this.name = options.name;
        this.baseStats = new baseStats(10, 10, 10, 10);
    }
    name: string;
}