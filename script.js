// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = prompt("How many characters would you like in your password?")
  var specialChar = confirm("Would you like to include special characters like !, #, %, *, etc?")
  var numbers = confirm("Would you like to include numbers in your password?")
  var upperOrLower = prompt("Would you like to include uppercase letters? Choose u, for only upper, l for only lower, or b for both.")


  console.log("characters: ", characters)
  console.log("special characters: ", specialChar)
  console.log("numbers chosen: ", numbers)
  console.log("upperOrLower response: ", upperOrLower)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
