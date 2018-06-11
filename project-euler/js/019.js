/* Problem 19: Counting sundays
  https://projecteuler.net/problem=19
  Answer: 171
*/

let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let sundays = 0

function isLeapYear (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) return true
    }
    return true
  } else {
    return false
  }
}

function firstWeekdayOfYear (year) {
  year -= 1900
  const weekday = year % 7
  const leapMod = Math.floor((year - (year - 1) % 4) / 4)
  return (weekday + leapMod) % 7
}

for (let i = 1; i < 101; i++) {
  let day = firstWeekdayOfYear(1900 + i)
  daysInMonths[1] = 28 + isLeapYear(1900 + i)
  for (let j = 0; j < 12; j++) {
    day = (day + daysInMonths[j]) % 7
    if (day === 6) sundays++
  }
  console.log(1900 + i)
  console.log(isLeapYear(1900 + i))
  // console.log(day)
}

console.log(sundays)
