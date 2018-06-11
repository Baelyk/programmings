function multiplyOld (a, b, c = []) {
  let result = [0]
  let power = 0
  let product
  a = [...a.toString()]
  a.forEach((element, index) => {
    a[index] = parseInt(element)
  })
  console.log(a)
  b = [...b.toString()]
  b.forEach((element, index) => {
    a[index] = parseInt(element)
  })

  while (b.length > 0) {
    console.log('power' + power)
    let zeroes = [...'0'.repeat(power)]
    zeroes.forEach((element, index) => {
      zeroes[index] = parseInt(element)
    })
    console.log('z' + zeroes)
    let factor = b.pop()
    for (let i = 0; i < a.length; i++) {
      product = a[i] * factor
      console.log(a[i] + ' * ' + factor + ' = ' + product)
      product = [...product.toString()]
      product.forEach((element, index) => {
        product[index] = parseInt(element)
      })
      if (product.length > 1) {
        c[i - 1] = (c[i - 1] ? c[i - 1] : 0) + product[0]
        if (c[i - 1] > 9) {
          if (i - 2 >= 0) {
            c[i - 2] += parseInt([...c[i - 1].toString()][0])
          } else {
            c.unshift(parseInt([...c[i - 1].toString()][0]))
          }
          c[i - 1] %= c[i - 1]
        }
        c[i] = product[1]
      } else {
        c.push(product[0])
      }
    }
    console.log(result)
    console.log(c.concat(zeroes))
    result = add(result.join(''), c.concat(zeroes).join(''))
    console.log(result)
    power++
  }

  return result
}

function multiply (a, b) {
  let c = []
  let product
  a = [...a.toString()]
  a.map((element, index) => {
    a[index] = parseInt(element)
  })
  b = [...b.toString()]
  b.forEach((element, index) => {
    b[index] = parseInt(element)
  })

  console.log(a)

  if (b.length > 1) {
    const length = b.length
    while (b.length > 0) {
      const zeroes = [...'0'.repeat(length - b.length)].map((zero, index) => {
        return parseInt(zero)
      })
      c = add(c.join(''), multiply(a.join(''), b.pop()).concat(zeroes).join(''))
    }
  } else {
    for (let i = 0; i < a.length; i++) {
      product = a[i] * b[0]
      console.log(product + ' = ' + a[i] + ' * ' + b[0])
      product = [...product.toString()]
      product.forEach((element, index) => {
        product[index] = parseInt(element)
      })
      if (product.length > 1) {
        c[i - 1] = (c[i - 1] ? c[i - 1] : 0) + product[0]
        if (c[i - 1] > 9) {
          if (i - 2 >= 0) {
            c[i - 2] += parseInt([...c[i - 1].toString()][0])
          } else {
            console.log(parseInt([...c[i - 1].toString()][0]))
            c.unshift(parseInt([...c[i - 1].toString()][0]))
          }
          c[i - 1] %= c[i - 1]
        }
        c[i] = product[1]
      } else {
        c.push(product[0])
      }
    }
  }
  console.log(c)
  return c
}

function add (a, b) {
  let c = []
  let extra = 0
  a = [...a.toString()]
  a.forEach((element, index) => {
    a[index] = parseInt(element)
  })
  b = [...b.toString()]
  b.forEach((element, index) => {
    b[index] = parseInt(element)
  })
  while (a.length > b.length) {
    extra++
    c.push(a.shift())
  }
  while (b.length > a.length) {
    extra++
    c.push(b.shift())
  }
  a.forEach((term, index) => {
    c[index + extra] = term + b[index]
    if (c[index + extra] > 9) {
      if (index + extra - 1 >= 0) {
        c[index + extra - 1] += 1
      } else {
        c.unshift(1)
      }
      c[index + extra] %= 10
    }
  })

  return c
}

console.log(multiply(256, 4))
