/* Problem 9: Special Pythagorean triplet
  https://projecteuler.net/problem=9
  Answer: 31875000
*/

for (let m = 1; m <= 500; m++) {
  for (let n = 1; n < m; n++) {
    let a = Math.pow(m, 2) - Math.pow(n, 2)
    let b = 2 * m * n
    let c = Math.pow(m, 2) + Math.pow(n, 2)
    if (a + b + c === 1000) console.log(a * b * c)
  }
}
