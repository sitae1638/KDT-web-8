const express = require("express");
const app = express();
const PORT = 8001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//위 두가지는 정석으로 거의 고정하여 사용한다.
//view engine
app.set("view engine", "ejs"); //ejs의 set up
app.set("views", "./views"); // 어디에 template이 있는지 알려주는 것.

//router
app.get("/", (req, res) => {
  //   res.send("Hello");
  res.render("test2", { title: "폼 실습" });
});
//####################################
//실습
// app.get("/getForm", (req, res) => {
//   console.log(req.query);
//   res.render("result", {
//     title: "GET요청 폼 결과 확인하기",
//     userInfo: req.query,
//     //userInfo: {id: '', pw: ''}
//   });
// });

// app.post("/postForm", (req, res) => {
//   console.log(req.body);
//   res.render("result", {
//     title: "POST요청 폼 결과 확인하기",
//     userInfo: req.body,
//     //userInfo: {id: '', pw: ''}
//   });
// });
//########################################
// 과제 1번
// app.get("/testGetForm", (req, res) => {
//   console.log(req.query);
//   res.render("test1_result", {
//     title: "GET요청 폼 결과 확인하기",
//     userInfo: req.query,
//     //userInfo: {id: '', pw: ''}
//   });
// });
//########################################
// 과제 2번
app.post("/testPostForm", (req, res) => {
  console.log(req.body);
  res.render("test2_result", {
    title: "POST요청 폼 결과 확인하기",
    userInfo: req.body,
    //userInfo: {id: '', pw: ''}
  });
});

//####################################

app.post("/", (req, res) => {
  console.log(req.body);
});

// app.put("/", (req, res) => {
//   console.log(req.body);
// });

app.listen(PORT, () => {
  console.log(`http://localhost:$(PORT)`);
});
