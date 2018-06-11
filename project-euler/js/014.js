/* Problem 14: Longest Collatz sequence
  https://projecteuler.net/problem=14
  Answer: 837799
*/

let collatz = []
let longest = 1
let longNum = 1

for (let i = 1; i < 1e6; i++) {
  let j = i
  let length = 1
  while (j > 1) {
    if (collatz.length - 1 === j) {
      length += collatz[j - 1]
      j = 1
    } else {
      if (j % 2 === 0) {
        j /= 2
      } else {
        j = 3 * j + 1
      }
      length++
    }
  }
  console.log(i + ' ' + length)
  collatz.push(length)
  if (length > longest) {
    longest = length
    longNum = i
  }
}

console.log(longNum)
