/* Problem 4: Largest palindrome product
  https://projecteuler.net/problem=4
*/

let product = 0
for (let a = 999; a > 100; a--) {
  for (let b = 999; b > 100; b--) {
    let c = String(a * b)
    if (c.substr(0, c.length / 2) === c.substr(-c.length / 2).split('').reverse().join('')) {
      if(a * b > product) product = a * b
    }
  }
}
console.log(product)
