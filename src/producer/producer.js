const { memphis } = require("memphis-dev");
const config = require('../../config/config.json');

(async function () {
    let memphisConnection;

    try {
        memphisConnection = await memphis.connect({
            host: config.host,
            username: config.username,
            password: config.password
        });

        const producer = await memphisConnection.producer({
            stationName: config.stationName,
            producerName: `${config.stationName}_producer`
        });

        const headers = memphis.headers()
        headers.add('key', 'value')

        for (let i = 0; i < 10; i++) {
            let JSONPayload = { "id": i, "name": `Ankur_${i}`, "score": 200 };
            await producer.produce({
                message: Buffer.from(JSON.stringify(JSONPayload)), // you can also send JS object - {}
                headers: headers
            });
        }
        memphisConnection.close();
    } catch (ex) {
        console.log(ex);
        if (memphisConnection) memphisConnection.close();
    }
})();