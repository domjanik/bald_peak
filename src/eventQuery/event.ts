export class Event {
    constructor(callerId:string, eventType:any, args?:any){
        this.callerId = callerId;
        this.eventType = eventType;
        this.args = args;
    }

    public callerId: string;
    public eventType: any;
    public args: any;
}