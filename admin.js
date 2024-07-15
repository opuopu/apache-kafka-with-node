const kafka = require("./client.js");

// initialize server
async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "chat-2",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [chat-2]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();
