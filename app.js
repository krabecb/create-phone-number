//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers){
  const string = numbers.map(eachNum => eachNum.toString())
  
  for(let i = 0; i < string.length; i++) {
    if(i === 0) {
      string.unshift("(")
    }
    if(i === 4) {
      string.splice(4, 0, ")")
    }
    if(i === 5) {
      string.splice(5, 0, " ")
    }
    if(i === 8) {
      string.splice(9, 0, "-")
    }
  }
  const result = string.join('')
  return result
}