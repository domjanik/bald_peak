import { eventTypes } from "./constants";

export class Event {
    constructor(callerId:string, eventType:eventTypes, args?:any){
        this.callerId = callerId;
        this.eventType = eventType;
        this.args = args;
    }

    public callerId: string;
    public eventType: eventTypes;
    public args: any;
}