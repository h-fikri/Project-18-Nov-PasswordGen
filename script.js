document.write("This is From Javascript.");

function generatePassword(length) {
  // Set up a character set to use
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  // Initialize the password
  let password = "";

  // Loop through and generate a random character from the character set for the specified length
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  // Return the generated password
  return password;
}

let password = generatePassword(12); // Generate a 12-character password
