// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // var characters = prompt("How many characters would you like in your password?")
  // if (characters < 8 || characters != typeof(8)) {
  //   alert("Password cannot be less than 8 characters.")
  // }
  while (true) {
    var characters = prompt("How many characters would you like in your password? Minimum of 8 characters are required.");
    if (characters >= 8) {
      break
    }
    alert("You've entered an invalid answer. Please try again")
  }
  var specialChar = confirm("Would you like to include special characters like !, #, %, *, etc?")
  var numbers = confirm("Would you like to include numbers in your password?");
  var confirmedUpper = confirm("Would you like to include uppercase letters?");
  var confirmedLower = confirm("Would you like to include lowercase letters?");
  
  var passwordEmpty = [];
  var charSetLowerLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var charSetUpperLetters=[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  var charSetSpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "/", "`", "~"]
  var charNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  // if (numbers == false && upperOrLower == "l" && specialChar == false) {
  for (var i = 0; i < characters; i++) {
    passwordGen = charChoices.charAt(Math.floor( Math.random() * charSet.length))
    }
  // } else if (numbers && upperOrLower == "l" && specialChar == false) {
  //   for (var i = 0; i < characters; i++) {
  //     passwordEmpty += charSet[0].charAt(Math.floor( Math.random() * charSet.length))
  
  //   }
  // }
  // // 
   
  console.log("password: ", passwordEmpty)
  console.log("characters: ", characters)
  console.log("special characters: ", specialChar)
  console.log("numbers chosen: ", numbers)
  console.log("confirmedUpper response: ", confirmedUpper)
  console.log("confirmedLower response: ", confirmedLower)
  return passwordEmpty
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
