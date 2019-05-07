"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventQuery_1 = require("./eventQuery/eventQuery");
const api_1 = require("./communication/api");
const socketConnection_1 = require("./communication/socketConnection");
const objectController_1 = require("./controllers/objectController");
async function initializeApplication() {
    let server = api_1.default();
    socketConnection_1.default.createSocketConnection(server);
    eventQuery_1.default.startQuery();
    objectController_1.default.updateView();
}
exports.initializeApplication = initializeApplication;
//# sourceMappingURL=main.js.map