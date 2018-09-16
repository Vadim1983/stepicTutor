const body = document.body;
let howMuchMoney = +prompt('Сколько у Вас с собой денег?');
let howMuchApples = +prompt('Сколько Вы купили яблок?');
let howMuchBreed = +prompt('Сколько Вы купили батонов хлеба??');
let appleCost = +prompt('Сколько стоит одно яблоко?');
let breadCost = +prompt('Сколько стоит один батон?');
let totalAppleCost = howMuchApples * appleCost;
let totalBreadCost = howMuchBreed * breadCost;
let total = totalAppleCost + totalBreadCost;
if (howMuchMoney >= total) {
  body.innerHTML = '<p>true</p>';
} else if (howMuchMoney < total) {
  body.innerHTML = '<p>false</p>';
}
