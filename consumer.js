const kafka = require("./client.js");

async function init() {
  const consumer = kafka.consumer({ groupId: "my-app" });
  await consumer.connect();
  console.log("consumer connected");
  await consumer.subscribe({ topics: ["chat"], fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log({
        key: message.key.toString(),
        value: message.value.toString(),
        headers: message.headers,
      });
    },
  });
}
init();
