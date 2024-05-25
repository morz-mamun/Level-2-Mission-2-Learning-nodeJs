// node js work on event driven architecture

const EventEmiter = require("events");

const myEmiter = new EventEmiter(); // create a instance

// first listener

myEmiter.on("birthday", () => {
  console.log("HAPPY BIRTHDAY TO YOU");
});

// second listener
myEmiter.on("birthday", (gift) => {
  console.log(`I will send you a ${gift}`);
});

// when emit occurs then every listener will call their callback function.
myEmiter.emit("birthday", "Bike");
