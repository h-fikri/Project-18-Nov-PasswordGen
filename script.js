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
// var charactersLength = 10;
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

// Declaring Empty Variable for user input
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Creating a function to generate the prompts for the user
function getPasswordOptions() {
  // This is a loop to make sure the user selects a valid password length
  var confirmLength;
  // this while loop will continue to prompt the user until they enter a valid number
  while (
    !(confirmLength = prompt(
      "Password length must be a number between 10-64 characters. Please try again."
    )) ||
    confirmLength < 10 ||
    confirmLength > 64
  );

  // var confirmLength = prompt(
  //   "How many characters would you like your password to contain? Minimum 10 characters and maximum 64 characters"
  // );
  // while (confirmLength <= 9 || confirmLength >= 65 || isNaN(confirmLength)) {
  //   alert(
  //     "Password length must be a number between 10-64 characters. Try again"
  //   );
  //   var confirmLength = prompt(
  //     "How many characters would you like your password to contain? Minimum 10 characters and maximum 64 characters"
  //   );
  // }

  // if (confirmLength <= 9 || confirmLength >= 65) {
  //   alert(
  //     "Password length must be a number between 10-64 characters. Try again"
  //   );
  //   var confirmLength = prompt(
  //     "How many characters would you like your password to contain?"
  //   );
  // } else if (isNaN(confirmLength)) {
  //   alert(
  //     "Password length must be a number between 10-64 characters. Try again"
  //   );
  //   var confirmLength = prompt(
  //     "How many characters would you like your password to contain?"
  //   );
  // }

  // Question prompts for user to confirm what characters they would like to include in their password
  var confirmSpecialCharacter = confirm(
    "Click OK to confirm if you would like to include SPECIAL characters"
  );
  var confirmNumericCharacter = confirm(
    "Click OK to confirm if you would like to include NUMERIC characters"
  );
  var confirmLowerCase = confirm(
    "Click OK to confirm if you would like to include LOWERCASE characters"
  );
  var confirmUpperCase = confirm(
    "Click OK to confirm if you would like to include UPPERCASE characters"
  );

  // This is a loop to make sure the user selects at least one character type
  while (
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmSpecialCharacter === false &&
    confirmNumericCharacter === false
  ) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm(
      "Click OK to confirm if you would like to include SPECIAL characters"
    );
    var confirmNumericCharacter = confirm(
      "Click OK to confirm if you would like to include NUMERIC characters"
    );
    var confirmLowerCase = confirm(
      "Click OK to confirm if you would like to include LOWERCASE characters"
    );
    var confirmUpperCase = confirm(
      "Click OK to confirm if you would like to include UPPERCASE characters"
    );
  }

  // This array will hold the user's selected characters
  var passwordCharacters = [];

  if (confirmSpecialCharacter) {
    passwordCharacters.push(...specialCharacters);
  }

  if (confirmNumericCharacter) {
    passwordCharacters.push(...numericCharacters);
  }

  if (confirmLowerCase) {
    passwordCharacters.push(...lowerCasedCharacters);
  }

  if (confirmUpperCase) {
    passwordCharacters.push(...upperCasedCharacters);
  }

  // This is an empty string to hold the password
  var randomPassword = "";

  // This is a loop to randomly select characters from the array of user selected characters
  for (var i = 0; i < confirmLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    randomPassword += passwordCharacters[randomIndex];
  }

  // This is the password that will be displayed to the user
  console.log(randomPassword);
  return randomPassword;
}

//Creating a function to display the generated password to the user in the browser
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
