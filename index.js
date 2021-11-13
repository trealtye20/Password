var generatePasswordIDBtn = document.getElementById("generate");
var generatePasswordQSBtn = document.querySelector("#generate");

function generatePassword() {
var specialCharStr = "~`!@$%^&*()_+-=";
var upperCaseLetterStr = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxy";
var numbersStr = "0123456789";

var specialCharArr = specialCharStr.split("");
var upperCaseCharArr = upperCaseLetterStr.split("");
var lowerCaseCharArr = lowerCaseChars.split("");
var numbersArr = numbersStr.split("");

var specialChars = "!@#$%^&*()_+".split("");
console.log(specialChars);

var aPassword = [];
// user choices of Length, special chars, upper case, lowercase alphabets, numeric chars

var userChoiceLength = prompt("Enter password length: ");

if (userChoiceLength > 128 || userChoiceLength < 8) {
  alert("Please enter a value between 8 and 128");
  generatePassword();
}

// console.log(userChoiceLength);

var userChoiceSpecialChars = confirm("Special Characters?");
// console.log(userChoiceSpecialChars);

var userChoiceUpperCase = confirm("Upper Case?");
// console.log(userChoiceUpperCase);

var userChoiceLowerCase = confirm("Lower Case?");
// console.log(userChoiceLowerCase);

var userChoiceNumbers = confirm("Numbers?");

if (!userChoiceSpecialChars && !userChoiceUpperCase && !userChoiceLowerCase && !userChoiceNumbers) {
  alert("You must choose a character set");
  generatePassword();
}

// Array to hold all charater sets confirmed by user
var userCharPool = [];

// Array to hold all the chars for the final password.



  function copyArrayToPool(arr) {
    for (var i = 0; i < arr.length; i++) {
      userCharPool.push(arr[i]);
    }
    // console.log(userCharPool);
    return;
  }

  if (userChoiceSpecialChars) {
    copyArrayToPool(specialCharArr);
    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  }

  if (userChoiceUpperCase) {
    // copyArrayToPool(upperCaseCharArr);
    userCharPool = userCharPool = userCharPool.concat(upperCaseCharArr);
    // console.log(userCharPool);


  }

  if (userChoiceLowerCase) {
    copyArrayToPool(lowerCaseCharArr);

  }

  if (userChoiceNumbers) {
    userCharPool = userCharPool.concat(numbersArr);
    // console.log(userCharPool);

  };

  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userCharPool.length);

    // console.log(userCharPool[index]);

    aPassword.push(userCharPool[index]);

  }

  // console.log(aPassword);

  // console.log(aPassword.join(""));
  var myPassword = aPassword.join("");

  return myPassword
}

function writePassword() {
  var password = generatePassword();
  var passwordTextEl = document.getElementById("password");
  passwordTextEl.value = password;

  return;

}

generatePasswordIDBtn.addEventListener("click", writePassword);


