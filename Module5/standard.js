// console.log("Hello!")

//READLINE

const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// console.log("What is your name?");

// rl.prompt();

// rl.on("line", (input) => {
//   console.log(`Hello, ${input}`);
//   rl.close();
// });

//OS

const os = require("os");
const cluster = require("cluster");

// console.log(os.platform());
// console.log(os.arch());

// console.log(os.homedir());
// console.log(os.hostname());

// if (cluster.isPrimary) {
//   for (let i = 0; i < os.cpus().length; i++) {
//     cluster.fork();
//   }
// } else {
//   console.log(`New worker ${process.pid} is running`);
// }

//PATH

const path = require("path");

// console.log("File name is ", path.basename("a/b/c/index.js"));
// console.log("File ext is ", path.extname("a/b/c/index.js"));

// console.log("Full info", path.parse("a/b/c/index.js"));

// console.log(path.join("main", "assets"));

// console.log(path.join(__dirname));
// console.log(path.join(__dirname, '..'));

// console.log(path.resolve("main", "assets"));

//FS

const fs = require("fs");

fs.readFile(path.join(__dirname, "users.json"), (err, data) => {
  //   console.log(JSON.parse(data));
});

// let data = fs.readFileSync(path.join(__dirname, "users.json"));
// let users = JSON.parse(data).users;

// console.log(users);

// users.push({ id: 7, name: "Jonson", age: 33 });

// fs.writeFileSync(path.join(__dirname, "users.json"), JSON.stringify({ users }));

//tread
//stream

const stream = fs.createReadStream(path.join(__dirname, "users.json"));

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

//EVENTS

const events = require("events");
let eventEmmiter = new events.EventEmitter();

function eventHandler() {
  console.log("Hi from event handler!");
}

eventEmmiter.on("myEvent", eventHandler);

eventEmmiter.emit("myEvent");

function eventWithParamHandler(text) {
  console.log("Hi!");
  console.log(text);
}

eventEmmiter.on("myEventWithParams", eventWithParamHandler);

eventEmmiter.emit("myEventWithParams", "its text from param")
