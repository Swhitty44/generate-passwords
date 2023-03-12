var characterLength = 8;
var choiceArr = [];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-','=','+','[',']', '{','}','/','|']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z'];
var numbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// function writePassword() {
//    var correctPrompt = getPrompt(); 
//   var passwordText = document.querySelector("#password");

//     if(correctPrompt) {
//       var newPassword = generatePassword();<-- You wrote a function to collect an array based on user choices (getPrompt).
// Then you wrote a function to loop through that array and select items (generatePassword).
// You want to generatePassword based on your getPrompt, so you have to pass getPrompt into your generatePassword fuction so that generatePassword can start working with that data.
// If you don't pass anything into it, generatePassword doesn't have any data to work with.  See line 33.
//       passwordText.value = newPassword;
   
//     }  else {
//       passwordText.value = "";
//     } 
      
// }

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

// You created your empty array choiceArr at the top of your function.
// The function then adds items into the array with each step.
// In order to get the array you just built out of the fuction, you have to reutrn the array choiceArr.
// You had it set to return "true."
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
  


// You had these 2 lines below live in your code which was breaking it.
// function generatePassword() {
// }

