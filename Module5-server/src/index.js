const express = require("express");

const app = express();

const api = require("./api/routes");

const PORT = 8080;

// const logger = (req, res, next) => {
//   console.log("Logger is working!");
//   next();
// };

// app.use(logger);

const auth = (req, res, next) => {
  req.user = "Alex";
  next();
};

app.use(auth);

app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
