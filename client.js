const { Kafka } = require("kafkajs");
// create kafka client
const kafka = new Kafka({
  clientId: "my-app", //client id is kucbi
  brokers: ["192.168.10.61:9092"],
});

module.exports = kafka;
