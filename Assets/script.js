var characterLength = 8;
var choiceArr = [];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-','=','+','[',']', '{','}','/','|']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z'];
var numbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var correctPrompt = getPrompt(); 
    var newPassword = generatePassword(correctPrompt);
    var passwordText = document.querySelector("#password"); 
    passwordText.value = newPassword;
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
  }
  return password; 
}

function getPrompt(){
  choiceArr=[];
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCase); 
  }

   if (confirm("would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCase); 
  }

  if (confirm("would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialChar); 
  }

  if (confirm("would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numbers); 
  
  }
  
  return choiceArr;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
