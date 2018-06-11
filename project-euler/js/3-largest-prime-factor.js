/* Problem 3: Largest prime factor
  https://projecteuler.net/problem=3
*/

let number = 600851475143
for (let i = 2; number > 1; i++) {
  if (number % i === 0) number /= i
  if (number === 1) console.log(i)
}
