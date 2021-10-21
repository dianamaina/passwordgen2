var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var Number = "1234567890"
var specialCharacters = "!@#$%^^&&*()"
var uppercase = "ADBCDEFGHIJKLMNOPQRST"

// passwordText {
  // passwordText.secure();
  // passwordText = ("< 130")
// }


var generateBtn = document.querySelector("#generate");
// var generatePassword = document.querySelector("random"){
    
// loop 
function generatePassword(){
  var passwordlength = prompt ("pick lenght of password btwn 8-128")
  console.log (passwordlength)
  var lowercase = confirm("would you like to include lowercase characters?");
  console.log (lowercase)
 

}
//  Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// addEventListener
generateBtn.addEventListener("click", writePassword);