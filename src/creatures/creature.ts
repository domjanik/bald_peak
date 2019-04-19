import objectPosition from "../objects/objectPosition";
import mapObject from "../objects/mapObject";
import creatureController from "../controllers/creatureController";
import objectTypes from "../objects/objectTypes";
import eventQuery from "../eventQuery/eventQuery";

export default class creature implements mapObject{
    constructor(options) {
        this.lifeTime = options.lifetime || 10;
        this.position = new objectPosition();
        if(options.position) {
            this.position.axisX = options.position.axisX;
            this.position.axisY = options.position.axisY;
        }
        this.speed = options.speed || 1;
        this.id = creatureController.getNewId();
        this.startLiving();

    }
    age = 0;
    isAlive = true; 
    type = objectTypes.creature;
    id: string;
    position: objectPosition;
    lifeTime: number;
    speed: number;

    move(direction){

    }

    increaseAge() {
        console.log("%s : %d / %d", this.id, this.age, this.lifeTime);
        console.log("Position : (%d, %d)", this.position.axisX, this.position.axisY);
        this.age++;
        if(this.age >= this.lifeTime) {
            this.isAlive = false;
        } else {
            setTimeout(() => {
                this.increaseAge();
            }, 1000);
        }
    }

    startLiving() {
        this.increaseAge();
    }
}