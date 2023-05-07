const express = require("express");

const app = express();

const api = require("./api/routes");

const errorHandler = require("./infrastructure/errorHandler")

const PORT = 8080;

const auth = (req, res, next) => {
  req.user = "Alex";
  next();
};

app.use(auth);

app.use("/api", api);

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
