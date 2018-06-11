/* Problem 16: Power digit sum
  https://projecteuler.net/problem=16
  Answer: 1366
*/

let digits = [1]
let sum = 0

for (let i = 0; i < 1e3; i++) {
  console.log('i ' + i)
  const length = digits.length
  let overflow = 0
  console.log(length)
  console.log(digits)
  for (let j = 0; j < length + overflow; j++) {
    let number = digits[j] * 2
    if (!(isNaN(number))) {
      if (overflow) {
        overflow = 0
        number += 1
      }
      if (number > 9) {
        overflow = 1
        number = parseInt(number.toString().substr(-1))
      }
      digits.splice(j, 1, number)
    } else {
      digits.push(1)
    }
  }
}

digits.forEach(digit => {
  sum += digit
})

console.log(sum)
