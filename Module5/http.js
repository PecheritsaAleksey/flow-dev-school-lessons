const http = require("http");
const PORT = 8080;

// http
//   .createServer(function (req, res) {
//     res.write("Hello!");
//     res.end();
//   })
//   .listen(PORT, () => {
//     console.log("Server is running!");
//   });

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<h1>Hello!</h1>");
//     res.end();
//   })
//   .listen(PORT, () => {
//     console.log("Server is running!");
//   });

const users = [{ name: "Alex" }, { name: "Bob" }];
const articles = [{ text: "Hello!" }, { text: "Goodbye!" }];

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    if (req.url === "/users") {
      switch (req.method) {
        case "GET":
          res.end(JSON.stringify(users));
          break;
        case "POST":
          users.push({});
          res.end(JSON.stringify(users));
          break;
        default:
          break;
      }
    }
    if (req.url === "/articles") {
      res.end(JSON.stringify(articles));
    }
    res.end();
  })
  .listen(PORT, () => {
    console.log("Server is running!");
  });
