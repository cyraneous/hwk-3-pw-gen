// Arrays containing all the possible character types //

var lowerCase = [
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
var upperCase = [
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
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  "`",
  "{",
  "|",
  "}",
  "~",
];

//Prompts

function name() {
  var length = parseInt(
    prompt("How many characters shall this dumb password be?")
  );
  if (isNaN(length) === true) {
    alert("Please provide the password length as a number. Be Kind.");
    return;
  }
  if (length < 8) {
    alert("Please enter a length greater than 8 characters.");
    return;
  }
  if (length > 128) {
    alert("Please enter a length less than 128 characters.");
    return;
  }

  //Prompts to choose what character types are to be used in password generation//

  var hasUpperCase = confirm(
    "Click OK to confirm including uppercase letters."
  );

  var hasLowerCase = confirm(
    "Click OK to confirm including lowercase letters."
  );

  var hasNumbers = confirm("Click OK to confirm including numbers.");

  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  if (
    hasUpperCase === false &&
    hasLowerCase === false &&
    hasNumbers === false &&
    hasSpecialCharacters === false
  ) {
    alert("Please select at least one character type.");
    return;
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
