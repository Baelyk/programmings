/* Problem 7: 10001st prime
  https://projecteuler.net/problem=7
*/

let primes = [2]

for (let i = 3; primes.length < 10001; i += 2) {
  let isPrime = true
  primes.forEach(prime => {
    if (i % prime === 0) isPrime = false
  })
  if (isPrime) primes.push(i)
}
console.log(primes.length)
console.log(primes[primes.length - 1])
