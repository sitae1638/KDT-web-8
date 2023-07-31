// function call(name, cd) {
//   setTimeout(function () {
//     console.log(name);
//     cd(name);
//   }, 1000);
// }
// function back(cd) {
//   setTimeout(function () {
//     console.log("back");
//     cd("back");
//   }, 1000);
// }

// function hell(cd) {
//   setTimeout(function () {
//     cd("callback hell");
//   }, 1000);
// }

// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "를 실행했구나");
//   });
//   hell(function (message) {
//     console.log("여기는" + message);
//   });
// });

//***************************************** */

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// call("kim")
//   .then(function (result) {
//     console.log(result + "반가워");
//     return back();
//   })
//   .then(function (result) {
//     console.log(result + "를 실행했구나");
//     return hell();
//   })
//   .then(function (result) {
//     console.log("여기는" + result);
//   });

async function exec() {
  const name = await call("kim");
  console.log(`${name} 반가워`);
  const result = await back();
  console.log(`${result}를 실행했구나`);
  const end = await hell();
  console.log(`여기는 ${end}`);
}

exec();

// async function exec() {
//     goMart(); // 1번으로 실행
//     await pickDrink(); // 2번으로 실행
//     pay(); // 3번으로 실행
//   }
