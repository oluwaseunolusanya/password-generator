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
  // Get password length from user and validate it to be atleast 8 and not more than 128 characters long.
  let passwordLength = 0;
  
  while ((passwordLength < 8) || (passwordLength > 128)){
      passwordLength = parseInt(prompt("How long do you want your password to be?(Password cannot be less than 8 characters or more than 128 characters.)"))
    }

  // Prompt user for type of each character in the password and validate correct type is entered.
  let passwordCharacters = []
  for (let i = 0; i < passwordLength; i++){
    let position = i + 1;
    // Specify valid character type.
    let characterTypes = ['l','u','n','s'];
    // Create a variable to store type entered by user.
    let passwordCharacter = '';
    
    // Continue prompting for valid entry until one is entered
    while (characterTypes.includes(passwordCharacter) == false){
      passwordCharacter = prompt(`What character do you want in position ${position} of your password. Type l for lowercase, u for uppercase, n for numeric or s for special character.`);
      
      // Store each valid entry into an array.
      if (passwordCharacter == 'l' || passwordCharacter == 'u' || passwordCharacter == 'n' || passwordCharacter == 's'){
        passwordCharacters.push(passwordCharacter);
      }
      else{
        continue;
      }
    }
    alert(`Here are the character types entered so far [${passwordCharacters}]. (l - lowercase, u - uppercase, n - numeric and s - special character.)`)
  }
  return passwordCharacters;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomArrayIndex = Math.floor((Math.random() * arr.length));

  return arr[randomArrayIndex];
}

// Function to generate password with user input
function generatePassword() {
  let password = '';
  // let passwordCharacter;
  let passwordCharacterTypes =  getPasswordOptions();
  // alert(passwordCharacterTypes);

  for (let index = 0; index < passwordCharacterTypes.length; index++){
    let passwordCharacterType = passwordCharacterTypes[index];
    // alert(passwordCharacterType)

    switch (passwordCharacterType) {
      case 'l':
        password = password.concat(getRandom(lowerCasedCharacters));
        // alert(password);
        break;
      case 'u':
        password = password.concat(getRandom(upperCasedCharacters));
        // alert(password);
        break;
      case 'n':
        password = password.concat(getRandom(numericCharacters));
        // alert(password);
        break;
      case 's':
        password = password.concat(getRandom(specialCharacters));
        // alert(password);
        break;    
      default:
        break;
    }
  }
  return password
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
  // getPasswordOptions();  //Testing the getPasswordOptions()
  // getRandom(upperCasedCharacters);  //Testing getRandom()
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);