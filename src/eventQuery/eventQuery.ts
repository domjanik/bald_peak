import Event from "./events/eventInterface";
import move from "./events/move";

export default class eventQuery {
    static events = new Array<Event>();

    private static async executeEvent(ev) {
        await ev.action();
        console.log("moved");
    }

    private static async startQuery() {
        if(this.events.length > 0) {
            await this.executeEvent(this.events[0]);
            console.log("this.startQuery");
            this.events.splice(0, 1);
            this.startQuery();
        } else { 
            setTimeout(() => {this.startQuery()}, 1000); 
        }
    }

    public static addEvent(ev: Event) {
        this.events.push(ev);
    }
}