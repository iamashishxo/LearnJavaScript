// let n = "Ashish today is ";

// function print(n) {
//   console.log(`heloo ${n} thrusday`);
//   console.log(n);
// }

// print(67);

// let a = 10;
// let b = 50;

// const sol = (a, b) => {
//   console.log(a * b);
// };
// sol(a, b);

function countV(s) {
  let count = 0;
  for (let a of s) {
    if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
      count++;
    }
  }
  console.log(count);
}

countV("hello");

const countVowel = (s) => {
  let count = 0;
  for (let a of s) {
    if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
      count++;
    }
  }
  console.log(count);
};
countVowel("xyz");
