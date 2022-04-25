// Assignment Code
var generateBtn = document.querySelector("#generate");

//main function to generate the random password
const generatePassword = () => {
  //Prompt user to enter password length 8-128 characters using PROMPT
  var passwordlengthprompt = prompt(
    //MESSAGE TO BE DISPLAYED IN THE CONSOLE
    "Please enter the length of the password you want (8-128) characters",
    8
  );
  //EXPRESSIONS TO DETERMINE IF THE ENTRY FROM THE USER IS VALID
  var expression1 = passwordlengthprompt >= 8;
  var expression2 = passwordlengthprompt <= 128;

  //IF STATEMENT to determin if entry is true
  if (expression1 && expression2) {
    //parse entry into an integer
    passwordlengthprompt = parseInt(passwordlengthprompt);
    console.log(passwordlengthprompt);
    console.log(typeof passwordlengthprompt);
    //if entry is not correct alert the user
  } else {
    alert("please enter a valid password length");
  }

  //user will be presented with a confirm for lower case(true)

  //confirm for uppercase (true)
  //confirm for numeric(true)
  //confirm for special characters(true)
  //RETURN Password should be generated for selected criteria on page
  return "";
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
