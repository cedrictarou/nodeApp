const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.disabled("x-powered-by");

app.use("/public", express.static(__dirname + "/public"));
app.use("/", require("./routes/index.js"));

app.listen(3000);