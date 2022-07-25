const express = require("express");

const app = express();

app.use(require("./usuarios"));
app.use(require("./categoria"));

module.exports = app;
