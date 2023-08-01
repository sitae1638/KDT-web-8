const express = require("express");
const app = express();
const PORT = 8001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

// //router
app.get("/", (req, res) => {
  res.render("index", { title: "230801" });
});

app.get("/ajax", (req, res) => {
  console.log("back", req, query);
  res.send(req.query);
});

app.get("/axios", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});

app.get("/fetch", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

app.post("/fetch", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});
//get으로 정보 받기
// app.get("/getPage", (req, res) => {
//   res.render("/get");
// });

// //post로 정보 받기
// app.post("/postPage", (req, res) => {
//   req.render("/post");
// });

//서버 오픈
app.listen(PORT, () => {
  console.log("http://localhost:8001");
});

app.post("/ajax", (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
});
