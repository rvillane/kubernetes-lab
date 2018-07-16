const api = require('./lib/api');

function stop() {
    api.server.stop({ timeout: 60 * 1000 }).then(() => {
        console.log('Server: stopped and rejecting requests.');
    });
}

process.on('SIGTERM', () => {
    stop();
});

process.on('SIGINT', () => {
    stop();
});

process.on('unhandledRejection', err => {
    logger.error(err);
});

async function start() {
    await api.server.start();
    console.log('Server: running and accepting requests.');
}

start();
