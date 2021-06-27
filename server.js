const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/herodep-b/dist/"));
app.get("*", function (req, res) {
  res.sendFile("./herodep-b/dist/index.html");
});
app.listen(process.env.PORT || 8080);
