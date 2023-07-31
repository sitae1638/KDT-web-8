setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

function red() {
  return new Promise(function (resove, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "red";
    });
  });
}

function orange() {
  return new Promise(function (resove, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "orange";
    });
  });
}
function yellow() {
  return new Promise(function (resove, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
    });
  });
}
function green() {
  return new Promise(function (resove, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "green";
    });
  });
}
function blue() {
  return new Promise(function (resove, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "blue";
    });
  });
}
