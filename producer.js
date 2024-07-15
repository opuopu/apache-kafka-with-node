const kafka = require("./client.js");
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function init() {
  const producer = kafka.producer();
  await producer.connect();
  console.log("producer connected");
  rl.setPrompt(">");
  rl.prompt();
  rl.on("line", async function (line) {
    const [key, value] = line.split(" ");
    await producer.send({
      topic: "chat",
      messages: [
        {
          partition: key === "jhon" ? 0 : 1,
          key: "key1",
          value: JSON.stringify({ name: key, message: value }),
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });

  console.log("messages sent");
}
init();
