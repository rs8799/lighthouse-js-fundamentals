function isOdd(num) {
  if (num % 2 ===0){
    return false;
  }
  if (num % 2 != 0){
    return true
  }
}
console.log("3 is odd: " + isOdd(3));