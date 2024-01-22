require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

const database = require("./database");

database();

const api = require("./api/routes");

const errorHandler = require("./infrastructure/errorHandler");

const { auth } = require("./middlewares/auth");

app.use(express.json());

const PORT = 8080;

app.use(auth);

app.use("/api", api);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
