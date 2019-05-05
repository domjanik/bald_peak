"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class eventQuery {
    static async executeEvent(ev) {
        await ev.action();
        console.log("moved");
    }
    static async startQuery() {
        console.log("this.startQuery");
        if (this.events.length > 0) {
            await this.executeEvent(this.events[0]);
            this.events.splice(0, 1);
            this.startQuery();
        }
        else {
            setTimeout(() => { this.startQuery(); }, 1000);
        }
    }
    static addEvent(ev) {
        this.events.push(ev);
    }
}
eventQuery.events = new Array();
exports.default = eventQuery;
//# sourceMappingURL=eventQuery.js.map