// java is a dynamically typed language

// const age = 23;

// //age = 29 + 1;
// console.log(age);
//  let sr = 'Ashish';
// console.log(sr[0]);

let prices = [250, 645, 300, 900, 50];
let discount = 10;

for (let i = 0; i < prices.length; i++) {
  prices[i] = prices[i] - prices[i] / discount;
}
for (let val of prices) {
  console.log(val);
}

let companiesName = ["Microsoft", "Tesla", "google", "uber", "IBM", "Netflix"];

companiesName.shift();
companiesName.splice(2, 1, "ola");

companiesName.push("amazon");

console.log(companiesName);

let FullName = "ashish Manhas";

console.log(`my name is ${FullName}`);
