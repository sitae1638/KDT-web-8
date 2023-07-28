const express = require("express");
const app = express();
const PORT = 8003;

app.set("view engine", "ejs");
// app.set("view", "./views");
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("main");
});
app.get("/ass1", (req, res) => {
  res.render("ass1");
});
app.get("/ass2", (req, res) => {
  res.render("ass2");
});
app.get("/ass3", (req, res) => {
  res.render("ass3", { data: [2, 3, 4, 5, 6, 7, 8, 9] });
});

app.listen(PORT);
