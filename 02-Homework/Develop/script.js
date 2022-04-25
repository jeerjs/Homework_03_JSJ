// Assignment Code
var generateBtn = document.querySelector("#generate");

//string for lower case letters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
//string for uppercase letters
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//string for numeric
var numeric = "0123456789";
//string for special characters
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~]";

//starter string
var charset = "";

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

  //IF STATEMENT to determine if entry is true
  if (expression1 && expression2) {
    //parse entry into an integer
    passwordlengthprompt = parseInt(passwordlengthprompt);

    // console.log(passwordlengthprompt);
    // console.log(typeof passwordlengthprompt);

    //if entry is not correct alert the user and close window
  } else {
    alert("please enter a valid password length");
    e.default.prevent();
    window.close;
  }

  //confirm buttons and add to charset
  //user will be presented with a confirm for lower case(true)
  const pushlowercase = confirm("Do you want lowercase in your password");
  if (pushlowercase) {
    //this will add the string to the starter string
    charset += lowercase;
    // console.log("True");
  }
  //confirm for uppercase (true)
  const pushuppercase = confirm("do you want uppercase in your password");
  if (pushuppercase) {
    //this will add the string to the starter string
    charset += uppercase;
    // console.log("True");
  }
  //confirm for numeric(true)
  const pushnumeric = confirm("do you want numbers in your passowrd");
  if (pushnumeric) {
    //this will add the string to the starter string
    charset += numeric;
    // console.log("True");
  }
  //confirm for special characters(true)
  const pushspecial = confirm(
    "do you want special characters in your password"
  );
  if (pushspecial) {
    //this will add the string to the starter string
    charset += special;
    // console.log("True");
  }

  //declare password as variable
  var password = "";

  //create a for loop to use the declared password length and use math.floor to randomise the selection
  for (let i = 0; i < passwordlengthprompt; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  //RETURN Password should be generated for selected criteria on page
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
