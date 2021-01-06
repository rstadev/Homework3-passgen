// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // var characters = prompt("How many characters would you like in your password?")
  // if (characters < 8 || characters != typeof(8)) {
  //   alert("Password cannot be less than 8 characters.")
  // }
  while (true) {
    var characters = prompt("How many characters would you like in your password?");
    if (characters >= 8) {
      break
    }
    alert("You've entered an invalid answer. Please try again")
  }
  var specialChar = confirm("Would you like to include special characters like !, #, %, *, etc?")
  var numbers = confirm("Would you like to include numbers in your password?");
  var upperOrLower = prompt("Would you like to include uppercase letters? Choose u, for only upper, l for only lower, or b for both.");
  var passwordEmpty = "";
  var charSet = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < characters; i++) {
    passwordEmpty += charSet.charAt(Math.floor(Math.random() * charSet.length))
  }
   
  console.log("password: ", passwordEmpty)
  console.log("characters: ", characters)
  console.log("special characters: ", specialChar)
  console.log("numbers chosen: ", numbers)
  console.log("upperOrLower response: ", upperOrLower)
  return passwordEmpty
}

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
