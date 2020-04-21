const {RaymonServer} = require('../lib/');

const server = new RaymonServer();
server.start();
server.addRequestHandler("hello", (socketType, user, packet) => {
    console.log(`user ${user.id} sent me ${packet.payload}`);
    server.send(RaymonServer.SocketType.TCP, user, "hello_back", {hello: "back"})
});
