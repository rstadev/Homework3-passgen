// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordEmpty = [];
var charSetLowerLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charSetUpperLetters=[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var charSetSpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "/", "`", "~"];
var charNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function generatePassword() {
  while (true) {
    var characters = prompt("How many characters would you like in your password? Minimum of 8 characters are required.");
    if (characters >= 8 && characters <= 128) {
      break
    }
    alert("You've entered an invalid answer. Please try again")
  }
  var specialChar = confirm("Would you like to include special characters like !, #, %, *, etc?");
  var numbers = confirm("Would you like to include numbers in your password?");
  var confirmedUpper = confirm("Would you like to include uppercase letters?");
  var confirmedLower = confirm("Would you like to include lowercase letters?");
  
  if (confirmedUpper && confirmedLower && numbers && specialChar) {
    charChoices = charSetLowerLetters.concat(charSetUpperLetters, charSetSpecialChar, charNumbers);
  }
  else if (confirmedUpper && confirmedLower && numbers) {
    charChoices = charSetLowerLetters.concat(charSetUpperLetters, charNumbers)
  }
  else if (confirmedUpper && confirmedLower && specialChar) {
    charChoices = charSetLowerLetters.concat(charSetUpperLetters, charSetSpecialChar)
  }
  else if (confirmedUpper && numbers && speicalChar) {
    charChoices = charSetUpperLetters.concat(charSetSpecialChar, charNumbers)
  }
  else if (confirmedLower && numbers && specialChar) {
    charChoices = charSetLowerLetters.concat(charNumbers, charSetSpecialChar)
  }
  else if (confirmedUpper && numbers) {
    charChoices = charSetUpperLetters.concat(numbers)
  }
  else if (confirmedUpper && specialChar) {
    charChoices = charSetUpperLetters.concat(charSetSpecialChar)
  }
  else if (confirmedLower && numbers) {
    charChoices = charSetLowerLetters.concat(charNumbers)
  }
  else if (confirmedUpper && confirmedLower) {
    charChoices = charSetLowerLetters.concat(charSetUpperLetters)
  }
  else if (specialChar && numbers) {
    charChoices = charSetSpecialChar.concat(charNumbers)
  }
  else if (confirmedUpper) {
    charChoices = charSetUpperLetters
  }
  else if (confirmedLower) {
    charChoices = charSetLowerLetters
  }
  else if (numbers) {
    charChoices = charNumbers
  }
  else if (specialChar) {
    charChoices = charSetSpecialChar
  }
  else {
    alert("Please pick at least one choice!")
    return "Try again!"
  }





  for (var i = 0; i < characters; i++) {
    var passwordGen = charChoices[Math.floor( Math.random() * charChoices.length)];
    passwordEmpty.push(passwordGen)
    }
 
  console.log("password: ", passwordEmpty)
  console.log("characters: ", characters)
  console.log("special characters: ", specialChar)
  console.log("numbers chosen: ", numbers)
  console.log("confirmedUpper response: ", confirmedUpper)
  console.log("confirmedLower response: ", confirmedLower)
  
  var passwordJoin = passwordEmpty.join("")
  return passwordJoin
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
