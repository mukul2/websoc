// Importing the required modules
const WebSocketServer = require('ws');
const PORT = process.env.PORT || 3000;
// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: PORT })

// Creating connection using websocket
wss.on("connection", ws => {
    console.log("new client connected");
    // sending message
    ws.on("message", data => {
        //ws.send("REPLY : "+data);
        console.log(`Client has sent us: ${data}`)

        wss.clients.forEach(function each(client) {
            client.send(Buffer.from(data).toString());
        });
    });

    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});
console.log("The WebSocket server is running on port "+PORT);

// const app = require('express')();
// const appWs = require('express-ws')(app);
// const PORT = process.env.PORT || 3000;
// app.ws('/echo', ws => {
//     ws.on('message', msg => {
//         console.log('Received: ', msg);
//         ws.send("REPLY : "+msg);
//     });
// });
//
// app.listen(PORT, () => console.log(`Listening on ${PORT}`));