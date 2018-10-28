import { eventTypes } from "./constants";

export class Event {
    constructor(callerId:string, eventType:any, args?:any){
    }

    callerId: string;
    eventType: eventTypes;
    args: any;
}