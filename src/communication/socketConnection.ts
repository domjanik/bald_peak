import * as io from "socket.io";

export default class socketConnection {
    static ioServer: io.Server;
    
    static createSocketConnection(httpServer) {
        this.ioServer = io.listen(httpServer);
        this.ioServer.sockets.on("connection", (socket) => {
            console.log("Socket connected.");
        })
    }

    static sendMessage(message: string, data?:any) {
        this.ioServer.sockets.emit(message, data);
    }
}