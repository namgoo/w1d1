var args = process.argv;
var pass = args[2]
console.log(pass)
console.log((typeof pass))

// function obfuscate(password) {
//   var nstr = ""
//   for (var i = 0; i < password.length; i++ ) {
//     if (password[i] == "a") {
//       nstr[i] = "4"
//     } else if (password[i] == "e") {
//       nstr[i] = "3"
//     } else if (password[i] == "o") {
//       nstr[i] = "0"
//     } else if (password[i] == "l") {
//       nstr[i] = "1"
//     } else {
//       nstr[i] = password[i]
//     }
//   }
//   return nstr
// }


function obfuscate(password) {
  var nstr = ""
  for (var i = 0; i < password.length; i++ ) {
    if (password[i] == "a") {
      nstr = nstr + "4"
    } else if (password[i] == "e") {
      nstr = nstr + "3"
    } else if (password[i] =="o") {
      nstr = nstr + "0"
    } else if (password[i] == "l") {
      nstr = nstr + "1"
    } else {
      nstr = nstr + password[i]
    }
  }
  return nstr
}

console.log(obfuscate(pass))