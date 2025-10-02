const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index.route");

api = express();

api.use(express.json());
api.use(logger("dev"));
api.use(cors());

api.use("/api/v1/", indexRouter);

module.exports = api;
