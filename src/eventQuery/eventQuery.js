"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class eventQuery {
    constructor() {
        this.events = new Array();
        this.startQuery();
    }
    async executeEvent(ev) {
        await ev.action();
        console.log("moved");
    }
    async startQuery() {
        if (this.events.length > 0) {
            await this.executeEvent(this.events[0]);
            console.log("this.startQuery");
            this.events.splice(0, 1);
            this.startQuery();
        }
        else {
            setTimeout(() => { this.startQuery(); }, 1000);
        }
    }
    addEvent(ev) {
        this.events.push(ev);
    }
}
exports.eventQuery = eventQuery;
//# sourceMappingURL=eventQuery.js.map