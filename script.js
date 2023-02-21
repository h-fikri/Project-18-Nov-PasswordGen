// ---------------------------------------------- //
// testing
// function generatePassword(length) {
//   // Set up a character set to use
//   let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//   // Initialize the password
//   let password = "";

//   // Loop through and generate a random character from the character set for the specified length
//   for (let i = 0; i < length; i++) {
//     password += charset.charAt(Math.floor(Math.random() * charset.length));
//   }

//   // Return the generated password
//   return password;
// }

// let password = generatePassword(12); // Generate a 12-character password
// testing finished
// ---------------------------------------------- //
// Array of special characters to be included in password
var charactersLength = 12;
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// generating password via button click
var generateBtn = document.querySelector("#generate");

// Initial setup on variables
var characterStore = [];

// Function to prompt user for password options
function getPasswordOptions() {
  var pwd = getPasswordOptions();
  if (pwd != null) {
    var password = genPassword(pwd);
    alert("Your password is: " + password);
  }
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
