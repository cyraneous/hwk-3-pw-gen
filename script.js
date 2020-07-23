var lowerCase = ["a", "b"........]
var upperCase = 
var numbers =
var specialChar =

function name() { 
var length = parseInt (
prompt("How many characters shall this dumb password be?")

)
if(isNaN(length)===true) {
    alert("Please provide the password length as a number. Jerk.")
    return

}
if( length < 8){
    alert("Please enter a length greater than 8 characters.")
    return
}
if( length > 128){
    alert("Please enter a length less than 128 characters.")
    return
}
var hasUpperCase = confirm (
    "Click OK to cofirm including uppercase letters."
)
// Create var = for other cases//

if (hasUpperCase===false&&hasLowerCase===false&&hasNumbers===false&&hasSpecialCharacters===false){
    alert("Please select at least one character type.")
    return
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
