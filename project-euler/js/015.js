/* Problem 15: Lattice paths
  https://projecteuler.net/problem=15
  Answer: 137846528820
*/

let dimension = 20

function factorial (number) {
  let result = 1
  while (number--) result *= number + 1
  return result
}

let paths = parseInt(factorial(2 * dimension) / Math.pow(factorial(dimension), 2))

console.log(paths)
