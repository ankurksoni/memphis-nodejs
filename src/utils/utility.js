function processMessage(message, context) {
    console.log(message.getData().toString());
    message.ack();
}

module.exports = {
    processMessage
};