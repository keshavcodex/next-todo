const express = require("express");

const app = express();

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("Listening on port 5000");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

var n = 0;
app.post("/post", (req, res) => {
  n++;
  console.log(n + " times");
  res.redirect("/");
});
