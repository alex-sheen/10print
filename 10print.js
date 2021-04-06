/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

let w = process.stdout.columns / 2
let symbols = ['┌','┐','└','┘','├','┤','┬','┴','╪','╫','╨']
let t = 1
function draw () {
  /*
  setTimeout(draw, 1000 / (Math.abs(Math.sin(t/20))*45 + 10))
  t++ */
  setTimeout(draw, 1000 / 50)
  let output = ''

  for (let i = 0; i < w; i++) {output += ' '}

  for (let i = 0; i < 16+Math.random()*4; i++) {
    let rand = Math.round(Math.random()*10)
    output += symbols[rand]
  }

  w += 4*(Math.random()-0.5)
  if (w + 20 > process.stdout.columns) w -= 3
  else if (w < 20) w += 3

  console.log(output)
}

draw()
