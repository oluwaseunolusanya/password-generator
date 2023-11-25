// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Get password length from user.
  let passwordLength = 0;
  while ((passwordLength < 8) || (passwordLength > 128)) {
    passwordLength = parseInt(prompt("How long do you want your password to be?(Password cannot be less than 8 characters or more than 128 characters.)"))
  }

  // Prompt user for type of each character in the password
  let passwordCharacters = []
  for (let i = 0; i < passwordLength; i++){
    let position = i + 1;
    passwordCharacters.push(prompt(`What character do you want in position ${position} of your password. Type l for lowercase, u for uppercase, n for numeric or s for special character.`));
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomArrayIndex = Math.floor(Math.random() * (arr.length() + 1));
  return arr(randomArrayIndex);
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
  // getPasswordOptions();  //Testing the getPasswordOptions()
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);