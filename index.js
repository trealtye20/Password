var generatePasswordIDBtn = document.getElementById("generate");
var generatePasswordQSBtn = document.querySelector("#generate");


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
console.log(userChoiceLength);

var userChoiceSpecialChars = confirm("Special Characters?");
console.log(userChoiceSpecialChars);

var userChoiceUpperCase = confirm("Upper Case?");
console.log(userChoiceUpperCase);

var userChoiceLowerCase = confirm("Lower Case?");
console.log(userChoiceLowerCase);

var userChoiceNumbers = confirm("Numbers?");

// Array to hold all charater sets confirmed by user
var userCharPool = [];

// Array to hold all the chars for the final password.



  function copyArrayToPool(arr) {
    for (var i = 0; i < arr.length; i++) {
      userCharPool.push(arr[i]);
    }
    console.log(userCharPool);
    return;
  }

  if (userChoiceSpecialChars) {
    copyArrayToPool(specialCharArr);
    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  }

  if (userChoiceUpperCase) {
    // copyArrayToPool(upperCaseCharArr);
    userCharPool = userCharPool = userCharPool.concat(upperCaseCharArr);
    console.log(userCharPool);

    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  }

  if (userChoiceLowerCase) {
    copyArrayToPool(lowerCaseCharArr);

    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  }

  if (userChoiceNumbers) {
    userCharPool = userCharPool.concat(numbersArr);
    console.log(userCharPool);

    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  };

  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userCharPool.length);

    console.log(userCharPool[index]);

    aPassword.push(userCharPool[index]);

  }
  console.log(aPassword);

  // TODO: replace the first characters in the passwrod array with the characters in the guaranteed array

  console.log(aPassword.join(""));


function writePassword() {
  var password = generatePassword();
  var passwordTextEl = document.getElementById("password");

  passwordTextEl.value = password;

  return;

}

generatePasswordIDBtn.addEventListener("click", writePassword);

