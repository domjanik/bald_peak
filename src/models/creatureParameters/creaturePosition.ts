export class creaturePosition{
    constructor(axisX?: number, axisY?:number){
        this.axisX = axisX;
        this.axisY = axisY;
        this.axisZ = 0;
    }
    axisX: number;
    axisY: number;
    axisZ: number;
}