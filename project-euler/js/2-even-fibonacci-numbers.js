/* Problem 2: Even Fibonacci Numbers
  https://projecteuler.net/problem=2
*/

let fibonacci = [0, 1, 'temp']
let sum = 0
while (fibonacci[1] < 4e6) {
  fibonacci[2] = fibonacci[1]
  fibonacci[1] = fibonacci[0] + fibonacci[1]
  fibonacci[0] = fibonacci[2]
  if (fibonacci[1] % 2 === 0) sum += fibonacci[1]
}

console.log(sum) // 4613732
