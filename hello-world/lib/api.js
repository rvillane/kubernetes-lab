const Hapi = require('hapi');

const server = Hapi.server({
    port: 8080,
});

// routes
server.route({
    method: 'GET',
    path: '/',
    handler: () => 'Healthy',
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: handlerHelloWorld,
});

// handlers
async function handlerHelloWorld(request, h) {
    const response = h.response('<html><head><title>hi</title></head><body>Hello World</body></html>');
    response.type("text/html");
    return response;
}

module.exports = {
    server,
};

