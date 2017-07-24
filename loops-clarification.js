var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024

for (var counter = 0; counter < 10; counter++){
  result = result * 2
}