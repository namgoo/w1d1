


function loopyLighthouse(range, multiples, words) {
  var result = ""
  for (i = range[0]; i < range[1] + 1; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      result = words[0] + words[1]
      console.log(result)
    }
    else if ( i % multiples[0] === 0) {
      result = words[0]
      console.log(result)
    }
    else if ( i % multiples[1] === 0) {
      result = words[1]
      console.log(result)
    }
    else {
      result = i
      console.log(result)
    }
  }
  return ""
}


console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));