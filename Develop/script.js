// Assignment Code
var generateBtn = document.querySelector("#generate");

//Setting strings for password requirements
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*(){}[]=<>/";

//Varaiables for all possiblities

var allStr = upperCase + lowerCase + numbers + symbols;
var z = upperCase + lowerCase + numbers;
var y = upperCase + lowerCase + symbols;
var x = upperCase + numbers + symbols;
var w = lowerCase + numbers + symbols;
var v = upperCase + lowerCase;
var u = upperCase + numbers;
var t = upperCase + symbols;
var s = lowerCase + numbers;
var r = lowerCase + symbols;
var q = numbers + symbols;

console.log(upperCase);

// Write password to the #password input

function generatePassword() {
  // Empty string for new password
  var password = "";
  
  //Prompts for user to choose characters in generated password
  var userCharLength = prompt("How many characters would you like in your new password? Please enter a number between 8 and 127");
  if (userCharLength < 8 || userCharLength > 128) {
    alert("You must enter a number from 8 to 127");
  } else {
    (userCharLength >= 8 || userCharLength <= 128);
    var userUpperCase = confirm("Would you like uppercase letters?");
    var userLowerCase = confirm("Would you like lowercase letters?");
    var userNumbers = confirm("Would you like numbers?");
    var userSymbols = confirm("Would you like special characters?");
  }
  // Setting each condition for each possibilty the user could choose
  if (userUpperCase === true && userLowerCase === true && userNumbers === true && userSymbols === true) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * allStr.length);
      password += allStr.charAt(newChar);
    }
    
    return password;

  } else if (userUpperCase === true && userLowerCase === true && userNumbers === true && userSymbols == false) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * z.length);
      password += z.charAt(newChar);
    }
    return password;

  } else if (userUpperCase === true && userLowerCase === true && userNumbers === false && userSymbols == true) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * y.length);
      password += y.charAt(newChar);
    }
    return password;

  } else if (userUpperCase === true && userLowerCase === false && userNumbers === true && userSymbols == true) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * x.length);
      password += x.charAt(newChar);
    }
    return password;

  } else if (userUpperCase === false && userLowerCase === false && userNumbers === true && userSymbols == true) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * w.length);
      password += w.charAt(newChar,);
    }
    return password;

  } else if (userUpperCase === true && userLowerCase === true && userNumbers === false && userSymbols == false) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * v.length);
      password += v.charAt(newChar);
    }
    return password;

  } else if (userUpperCase === true && userLowerCase === false && userNumbers === true && userSymbols == false) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * u.length);
      password += u.charAt(newChar);
    }
    return password;

  } else if (userUpperCase === true && userLowerCase === false && userNumbers === false && userSymbols == true) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * t.length);
      password += t.charAt(newChar);
    }
    return password;

  } else if (userUpperCase === false && userLowerCase === true && userNumbers === true && userSymbols == false) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * s.length);
      password += s.charAt(newChar);
    }
    return password;

  } else if (userUpperCase === false && userLowerCase === true && userNumbers === false && userSymbols == true) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * r.length);
      password += r.charAt(newChar);
    }
    return password;

  } else if (userUpperCase === false && userLowerCase === false && userNumbers === true && userSymbols == true) {
    for (var i = 0; i < userCharLength; i++) {
      var newChar = Math.floor(Math.random() * q.length);
      password += q.charAt(newChar);

      return password;
    }
    
  } else {

    return password;

    }

}
//Function to write the new password in the text area
function writePassword() {
  var inputPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = inputPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
