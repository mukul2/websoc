const app = require('express')();
const appWs = require('express-ws')(app);
const PORT = process.env.PORT || 3000;
app.ws('/echo', ws => {
    ws.on('message', msg => {
        console.log('Received: ', msg);
        ws.send(msg);
    });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));