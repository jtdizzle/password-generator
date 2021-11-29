// Assignment Code

var generateBtn = document.querySelector("#generate");

//
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V',
  'W', 'X', 'Y', 'Z',];

var lowerCasedCharacters = [ 'a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
  'w', 'x', 'y', 'z',];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '/', '?', '{', '}', '[', ']', '|',];
 
var chosenCharacter = []
var password = ""

// Write password to the #password input
function writePassword() {
  // write prompt for password length between 8 and 128 chars
let passWordLength = prompt("How many characters between 8 and 128?") 

  

// write 4 confirms for character types lowercase, uppercase, numbers,
  // and special characters
  let lowerCaseConfirm = confirm("Include Lower Case?")
  let upperCaseConfirm = confirm("Include Upper Case?")
  let numberConfirm = confirm("Include Numbers?")
  let specialConfirm = confirm("Include Special Characters?")
  
  // set conditions for password character selection
  if (lowerCaseConfirm){
    chosenCharacter = chosenCharacter.concat(lowerCasedCharacters)
  }
  if (upperCaseConfirm){
    chosenCharacter = chosenCharacter.concat(upperCasedCharacters)
  }
  if (numberConfirm){
    chosenCharacter = chosenCharacter.concat(numericCharacters)
  }
  if (specialConfirm){
    chosenCharacter = chosenCharacter.concat(specialCharacters)
  }
  for(let i = 0; i < passWordLength; i++){
    var randIndex = Math.floor(Math.random() * chosenCharacter.length);
    var randElement = chosenCharacter[randIndex];
    password += randElement;
  }

  var passwordText = document.querySelector("#password");
  passwordText.textContent = password

  // loops for length and random character

  passwordText.value = password;

}

function generatePassword(){};

// Add event listener to button
generateBtn.addEventListener("click", writePassword);