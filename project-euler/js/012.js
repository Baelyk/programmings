/* Problem 12: Highly divisible triangular number
  https://projecteuler.net/problem=12
  Answer: 76576500
*/

let triangle = 1
let divisor = 0
let divisors = 0
for (let i = 2; divisors < 500; i++) {
  divisors = 2
  triangle += i
  let sqrt = Math.floor(Math.sqrt(triangle))
  for (let j = 2; j <= sqrt; j++) {
    if (triangle % j === 0) divisors += 2
  }
  if (sqrt * sqrt === triangle) divisors--
  if (divisors > divisor) divisor = divisors
}
console.log(triangle)
