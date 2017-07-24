// Assuming the program is named reverse.js, the following are a few example runs.

// node reverse.js hello goodbye
// olleh
// eybdoog
// node reverse.js 1 fish 2 fish
// 1
// hsif
// 2
// hsif


// var original = process.argv.slice(2)
// var reversed = []
// var hold = []
// var old
// for (var i = 0; i < original.length; i++) {

//   var oldWord = original[i]
//   console.log(oldWord)


var original = process.argv.slice(2)
var reversed = ""

for (var i = 0; i < original.length; i = i + 1) {
  for (var j = (original[i].length - 1); j > -1; j--) {
    reversed = reversed + original[i][j]
  }
  reversed = reversed + '\n'
}

console.log(reversed)



function reverse(newWord, word, letterIndex) {
    newWord = newWord + word[letterIndex]
    console.log(newWord)
    return newWord
}





// console.log(reversed)



// // for (var i = (words.length - 1) ; i = 0 ; i = i -1) {
// //   newWord = newWord + words[i]
// //   console.log(newWord+"\n")
// // }



