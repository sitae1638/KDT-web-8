// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// console.log(3);

let product;
let price;
goMart();
pickDrink();
pay(product, price);

function goMart() {
  console.log("마트에 와서 어떤 음료 마실까??");
}

function pickDrink() {
  setTimeout(function () {
    console.log("고민 끝!!");
    product = "코라콜라";
    pricr = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`상뭎명 : ${product}, 가격 : ${price}`);
}
