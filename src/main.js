"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./communication/api");
const socketConnection_1 = require("./communication/socketConnection");
async function initializeApplication() {
    let server = api_1.default();
    socketConnection_1.default.createSocketConnection(server);
}
exports.initializeApplication = initializeApplication;
//# sourceMappingURL=main.js.map