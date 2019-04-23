"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io = require("socket.io");
class socketConnection {
    static createSocketConnection(httpServer) {
        this.ioServer = io.listen(httpServer);
        this.ioServer.sockets.on("connection", (socket) => {
            console.log("Socket connected.");
        });
    }
    static sendMessage(message, data) {
        this.ioServer.sockets.emit(message, data);
    }
}
exports.default = socketConnection;
//# sourceMappingURL=socketConnection.js.map