/* Problem 17: Number letter counts
  https://projecteuler.net/problem=17
  Answer: 21124
*/

/* Note
  This could also be done without actually changing the numbers to words.
  Instead it would probably make more sense to just use the number of letters in
  each word, and summing them that way. Just determine what place in the number
  the digit is, then use an array of the lengths (with some extra for hundred
  and thousand detection).
  Also, you just observe the patterns in the number word lengths and not bother
  with actually counting for each number.
  But I think this is more fun. Less efficient, but overall more fun. Really I
  mainly wanted to make a number to word converter.
*/

const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const powers = ['hundred', 'thousand']
const separator = ' and '
let sum = 0

function numberToWords (number, and = false) {
  let words = ''
  number = parseInt(number).toString()
  if (number === '0') {
    and = false
  } else if (number.length === 1) {
    words = digits[number]
  } else if (number.length === 2) {
    if (number < 20) {
      words = teens[parseInt(number) - 10]
    } else {
      words = tens[number.substr(0, 1) - 2] + numberToWords(number.substr(1))
    }
  } else if (number.length === 3) {
    if (number.substr(0, 1) === '0') {
      words = numberToWords(number.substr(1))
    } else {
      words = digits[number.substr(0, 1)] + ' ' + powers[0] + numberToWords(number.substr(1), true)
    }
  } else if (number.length === 4) {
    words = digits[number.substr(0, 1)] + ' ' + powers[1] + numberToWords(number.substr(1))
  }
  if (!and && words !== '') words = ' ' + words
  return and ? separator + words : words
}

for (let i = 0; i <= 1000; i++) {
  console.log(numberToWords(i))
  sum += numberToWords(i).replace(/ /g, '').length
}

console.log(sum)
