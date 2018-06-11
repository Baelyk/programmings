/* Problem 6: Sum square difference
  https://projecteuler.net/problem=6
*/

let sum = 0
let sumsquare = 0

for (let i = 0; i < 101; i++) {
  sumsquare += Math.pow(i, 2)
}

for (let i = 0; i < 101; i++) {
  sum += i
}

console.log(Math.pow(sum, 2) - sumsquare) // 25164150
