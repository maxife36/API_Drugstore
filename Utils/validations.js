const md5 = require("crypto-js/md5");

let user_Name_Validator = (userName) => {
  // USER NAME RESTRICTIONS BY REGEXP

  let validsChar = /^\w+$/;
  let atLeastMayus = /[A-Z]+/;
  let atLeastMinus = /[a-z]+/;
  let invalidChar = /[\W]+/g;
  let invalidSpace = /[\s]+/;
  let eightChar = /.{8,}/;

  // USER NAME VALIDATIONS

  let hasValidChar = validsChar.test(userName);
  let hasAtLeastMayus = atLeastMayus.test(userName);
  let hasAtLeastMinus = atLeastMinus.test(userName);
  let hasInvalidChar = invalidChar.test(userName);
  let hasSpaces = invalidSpace.test(userName);
  let hasAtLeast8Char = eightChar.test(userName);

  let isValidUserName =
    hasValidChar &&
    hasAtLeastMayus &&
    hasAtLeastMinus &&
    !hasInvalidChar &&
    !hasSpaces &&
    hasAtLeast8Char;

  return {
    isValidUserName,
    hasAtLeastMayus,
    hasAtLeastMinus,
    invalidChar: {
      hasInvalidChar,
      indexInvalidChar: hasInvalidChar ? userName.match(invalidChar) : null,
    },
    invalidSpace: {
      hasSpaces,
      indexInvalidChar: hasSpaces ? invalidSpace.exec(userName).index : null,
    },
    hasAtLeast8Char,
  };
};

let user_Password_Validator = (password) => {
  // USER PASSWORD RESTRICTIONS BY REGEXP

  let validsChar = /^[\w\/.*+¿?¡!#&]{8,}$/;
  let atLeastMayus = /[A-Z]+/;
  let atLeastMinus = /[a-z]+/;
  let atLeastDigit = /\d+/;
  let specialChar = /[\/.*+¿?¡!#&]+/g;
  let invalidSpace = /\s+/;
  let eightChar = /.{8,}/;

  //USER PASSWORD VALIDATIONS

  let hasValidChar = validsChar.test(password);
  let hasAtLeastMayus = atLeastMayus.test(password);
  let hasAtLeastMinus = atLeastMinus.test(password);
  let hasAtLeastDigit = atLeastDigit.test(password);
  let hasSpecialChar = specialChar.test(password);
  let hasSpaces = invalidSpace.test(password);
  let hasAtLeast8Char = eightChar.test(password);

  return {
    hasValidChar,
    hasAtLeastMayus,
    hasAtLeastMinus,
    hasAtLeastDigit,
    hasSpecialChar,
    hasSpaces,
    hasAtLeast8Char,
  };
};

let mail_Validator = (mail) => {
  let mailRegex  = /\w+@\w+\.\w+/
  let hasMailStructure = mailRegex.test(mail) 

  return hasMailStructure
}


let password_encrypting = (password) => {
  let encryptedPassword = md5(password).toString();

  return encryptedPassword;
};

let userName_encrypting = (userName) => {
  let encryptedUserName = md5(userName).toString();

  return encryptedUserName;
};

module.exports = {
  user_Name_Validator,
  user_Password_Validator,
  password_encrypting,
  userName_encrypting,
  mail_Validator
};
