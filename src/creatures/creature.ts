import objectPosition from "../objects/objectPosition";
import mapObject from "../objects/mapObject";
import creatureController from "../controllers/creatureController";
import objectTypes from "../objects/objectTypes";
import eventQuery from "../eventQuery/eventQuery";
import baseStats from './baseStats';
import MoveEvent from '../eventQuery/events/move';

let hungerLimit = 100;

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
        this.hunger = 0;
        this.baseStats = new baseStats();
        
        this.startLiving();
    }
    age = 0;
    isAlive = true; 
    type = objectTypes.creature;
    id: string;
    position: objectPosition;
    lifeTime: number;
    speed: number;
    hunger: number;
    baseStats: baseStats;

    move(direction) {
        eventQuery.addEvent(new MoveEvent(this.id, direction, this.speed))
    }

    increaseAge() {
        console.log("%s : %d / %d, H : %d", this.id, this.age, this.lifeTime, this.hunger);
        console.log("Position : (%d, %d)", this.position.axisX, this.position.axisY);
        this.age++;
        this.hunger++
        if(this.age >= this.lifeTime || this.hunger === hungerLimit) {
            this.isAlive = false;
            console.log("Creature %s has died.", this.id);
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