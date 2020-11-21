const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.disabled("x-powered-by");

app.use(express.json());

app.use("/public", express.static(__dirname + "/public"));

//ルーティング処理
app.use("/", require("./routes/index.js"));
app.use("/test", require("./routes/test.js"));

app.listen(3000);
