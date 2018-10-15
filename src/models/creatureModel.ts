import * as logger from "@larsire/common-logger";

export class creatureModel {
    constructor(maximumLifetime?: number) {
        this.maximumLifetime = maximumLifetime || 8;
        this.startLife();
    }

    private birthDay: Date;
    public deathDate: Date;
    public alive: boolean = false;
    public maximumLifetime: number;
    public age: number = 0;

    private startLife() {
        logger.warn("Born!");

        this.birthDay = new Date();
        this.deathDate = this.birthDay;
        this.deathDate.setSeconds(this.deathDate.getSeconds() + this.maximumLifetime);
        this.alive = true;

        this.checkLife();
    }

    private checkLife() {
        let currentDate = new Date();
        if (currentDate.getTime() < this.deathDate.getTime()) {
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