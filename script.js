// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = prompt("How many characters would you like in your password?")
  var specialChar = confirm("Would you like any special characters like !, #, %, *, etc?")



  console.log("characters: ", characters)
  console.log("special characters: ", specialChar)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
