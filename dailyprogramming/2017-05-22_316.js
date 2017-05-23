/* Daily Programming Challenge 2017-05-22

**#316 Knight's Metric** (Easy)
Given a coordinate pair, find the lowest number of moves it would take a knight
(Chess) to move to that location starting from (0, 0).

Sample input:
`3 7`

Sample output:
`4`

*Optional:*
Also output one such route.
*/

let input = '3 7'.split(' ')
let destination = []
let distance = []
let output = {
  moves: '',
  route: []
}
let done = false // eslint-disable-line
function move (x, y) {
  distance[0] = distance[0] - x
  distance[1] = distance[1] - y
  output.route.push({x: destination[0] - distance[0], y: destination[1] - distance[1]})
  if (distance[0] === 0 && distance[1] === 0) {
    done = true
  }
}

// Step zero: take the absolute value of the ending points.
distance[0] = destination[0] = Math.abs(input[0])
distance[1] = destination[1] = Math.abs(input[1])

move(0, 0)

// Step one: Move (+2, +1), stopping when the last move causes ∆x < 2 or ∆y < 2
while (!done && (distance[0] >= 2 && distance[1] >= 2)) {
  move(2, 1)
}

// Step two: Move to the closest zero.
if (!done) {
  if (distance[0] < 2 && distance[1] < 2) {
    move(2, 1)
  } else if (distance[0] < 2) {
    move(1, 2)
  } else if (distance[1] < 2) {
    move(2, 1)
  }
}

// Step three:
while (!done && (distance[0] !== 0 || distance[1] !== 0)) {
  if (distance[0] === 0) {
    if (distance[1] === 1) {
      move(2, 1)
      move(-1, 2)
      move(-1, -2)
    } else if (distance[1] === 2) {
      move(2, 1)
      move(-2, 1)
    } else if (distance[1] === 3) {
      move(1, 2)
      move(1, 2)
      move(-1, -2)
    } else if (distance[1] === 4) {
      move(1, 2)
      move(-1, 2)
    } else if (distance[1] % 2 === 0) {
      move(1, 2)
      move(-1, 2)
    } else {
      move(2, 1)
      move(-1, 2)
      move(-1, 2)
    }
  } else { // distance[1] === 0
    if (distance[0] === 1) {
      move(1, 2)
      move(2, -1)
      move(-2, -1)
    } else if (distance[0] === 2) {
      move(1, 2)
      move(1, -2)
    } else if (distance[0] === 3) {
      move(2, 1)
      move(2, 1)
      move(-2, -1)
    } else if (distance[0] === 4) {
      move(2, 1)
      move(2, -1)
    } else if (distance[0] % 2 === 0) {
      move(2, 1)
      move(2, -1)
    } else {
      move(1, 2)
      move(2, -1)
      move(2, -1)
    }
  }
}

console.log(`${output.route.length - 1}`)

// Optional:
output.route.forEach((m, i) => {
  if (i !== 0) output.moves += `Move ${i}: (${m.x}, ${m.y})\n`
})
console.log(output.moves)
