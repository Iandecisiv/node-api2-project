// require your server and launch it here
const server = require('./api/server.js');

const port = process.env.PORT || 9000;

server.listen(port, () => {
    console.log('\n Server is running on localhost:9000 \n');
});

// \n is breaking the console log for ease of reading