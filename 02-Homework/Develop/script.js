// Assignment Code
var generateBtn = document.querySelector("#generate");

//main function to generate the random password

const generatePassword = () => {
  //Prompt user to enter password length 8-128 characters using PROMPT, COMBINE WITH VAR TO STORE VALUE

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

    console.log(passwordlengthprompt);
    console.log(typeof passwordlengthprompt);

    //if entry is not correct alert the user
  } else {
    alert("please enter a valid password length");
    e.default.prevent();
    window.close;
  }

  //array for lower case letters
  var lowercase = [
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
  //array for uppercase letters

  const uppercase = [
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

  //array for numeric
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //array for special characters
  var special = [
    " ",
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "+",
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
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  //confirm for uppercase (true)
  //confirm for numeric(true)
  //confirm for special characters(true)
  //user will be presented with a confirm for lower case(true)

  const lowercaseprompt = confirm("Do you want lowercase in your password");
  if (lowercaseprompt) {
    console.log("True");
  }
  const uppdercaseprompt = confirm("do you want uppercase in your password");
  if (uppdercaseprompt) {
    console.log("True");
  }
  const numbercaseprompt = confirm("do you want numbers in your passowrd");
  if (numbercaseprompt) {
    console.log("True");
  }
  const specialcharactersprompt = confirm(
    "do you want special characters in your password"
  );

  if (specialcharactersprompt) {
    console.log("True");
  }

  //To get an array from the above variables i will be using the following function
  const getpasswordcriteria = (
    haslowercase,
    hasuppercase,
    hasnumbers,
    hassymbols
  ) => {
    const characterstrue = [
      ...(haslowercase ? lowercase : []),
      ...(hasuppercase ? uppercase : []),
      ...(hasnumbers ? numeric : []),
      ...(hassymbols ? special : []),
    ];
    console.log(characterstrue);
  };

  getpasswordcriteria(
    specialcharactersprompt,
    numbercaseprompt,
    lowercaseprompt,
    uppdercaseprompt
  );
  if (getpasswordcriteria.length <= 1);
  {
    alert("Please select at least 1 condition");
    e.default.prevent();
    window.close;
  }

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
