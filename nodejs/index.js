const express = require("express");

// inport를 사용할 경우
// import express from "express";

const app = express();
const PORT = 8002;

app.set("view engine", "ejs");
app.set("view", "./view");

// 정적인 파일 불러오기
app.use("/public", express.static("public"));
console.log(__dirname);

app.get("/", (req, res) => {
  //   res.send("Hello express");
  //   res.send({
  //     result: true,
  //     code: 1000,
  //     message: "회원가입에 성공하셨습니다.",
  //     data: { name: "martin" },
  //   });
  // send()는 클라이언트에 응답 데이터를 보낼때 쓴다.
  // render()는 뷰 엔진 렌더링
  res.render("test", { data: [2, 3, 4, 5, 6, 7, 8, 9] });
  // 하고 나서는 뷰 파일에 test.ejs라는 파일을 만들어야 한다.
});

app.listen(PORT, () => {
  // console.log(`http://localhost:${PORT}`);
});

// console.log(express);
