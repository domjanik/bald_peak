import * as logger from "@larsire/common-logger";
import { creaturePosition } from "./creatureParameters/creaturePosition";
import Event from "../eventQuery/events/eventInterface";

export class creatureModel {
    constructor(objectId:string, maximumLifetime?: number) {
        this.maximumLifetime = maximumLifetime || 8;
        this.objectId = objectId;
        this.startLife();
    }
    public objectId: string = "";
    private movementSpeed = 1;
    private birthDay: Date;
    public deathDate: Date;
    public alive: boolean = false;
    public maximumLifetime: number;
    public age: number = 0;
    public position: creaturePosition;

    private startLife() {
        logger.warn("Born!");
        this.position = new creaturePosition(0, 0);
        this.birthDay = new Date();
        this.deathDate = this.birthDay;
        this.deathDate.setSeconds(this.deathDate.getSeconds() + this.maximumLifetime);
        this.alive = true;

        this.checkLife();
    }

    private checkLife() {
        let currentDate = new Date();
        if (this.alive && (currentDate.getTime() < this.deathDate.getTime())) {
            //if (currentDate.getTime() - this.birthDay.getTime() % 10 === 0) {
            this.age++;
            //}
            setTimeout(() => this.checkLife(), 1000)
        } else {
            this.alive = false;
            logger.warn("Death!");
        }
    }
}