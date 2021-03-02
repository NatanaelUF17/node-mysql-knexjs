const app = require('./app')

const port = process.env.PORT || 5000;

// * This is the entry point of the server, here we are listening and initializing the port.
app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
});