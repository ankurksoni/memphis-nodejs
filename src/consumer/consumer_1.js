const { memphis } = require('memphis-dev');
const config = require('../../config/config.json');
const { processMessage } = require('../utils/utility');
const host = config.host, username = config.username, password = config.password;

(async function () {
    let memphisConnection;

    try {
        memphisConnection = await memphis.connect({ host, username, password });

        const consumer = await memphisConnection.consumer({
            stationName: config.stationName,
            consumerName: `${config.stationName}_consumer_1`,
            consumerGroup: `${config.stationName}_consumer`
        });

        consumer.setContext({ key: "value" });
        consumer.on('message', processMessage);
        consumer.on('error', (error) => { });
    } catch (ex) {
        console.log(ex);
        if (memphisConnection) memphisConnection.close();
    }
})();