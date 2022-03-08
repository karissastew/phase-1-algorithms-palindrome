function reverse(word) {
   'abc' === 'cba'
   const wordArray = word.split("");
   const reversedWordArray = wordArray.reverse();
   const reversedWord = reversedWordArray.join("");
   return reversedWord;
  return word.split("").reverse().join("");
}
function isPalindrome(word) {
  const reversedWord = reverse(word);

  return word === reversedWord;
}


// reverse the input string
//if the input is the same as the reversed input
//return true
//else
//return false

//javascript cannot reverse a string, but it can reverse an array
//turning the string into an array, reversing it, then returning it to a string



if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
