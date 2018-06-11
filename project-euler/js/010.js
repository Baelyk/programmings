/* Problem 10: Summation of primes
  https://projecteuler.net/problem=10
  Answer: 142913828922
*/

let primes = []
let sum = 0

for (let i = 3; i <= 2e6; i += 2) {
  console.log(i)
  let isPrime = true
  primes.forEach(prime => {
    if (prime < Math.sqrt(i)) if (i % prime === 0) isPrime = false
  })
  if (isPrime) primes.push(i)
}

primes.forEach(prime => {
  sum += prime
})
console.log(sum)
