//const { user } = require("../Models")

let user_Name_Validator = (userName)=> {

// USER NAME RESTRICTIONS BY REGEXP

    let validsChar = /^\w+$/
    let atLeastMayus = /[A-Z]+/
    let atLeastMinus = /[a-z]+/
    let invalidChar = /[\W]+/g
    let invalidSpace = /[\s]+/
    let eightChar = /.{8,}/

// USER NAME VALIDATIONS

    let hasValidChar = validsChar.test(userName)
    let hasAtLeastMayus = atLeastMayus.test(userName)
    let hasAtLeastMinus = atLeastMinus.test(userName)
    let hasInvalidChar = invalidChar.test(userName)
    let hasSpaces = invalidSpace.test(userName)
    let hasAtLeast8Char = eightChar.test(userName)
    
    let isValidUserName = hasValidChar && hasAtLeastMayus && hasAtLeastMinus && !hasInvalidChar && !hasSpaces && hasAtLeast8Char

    return {
        isValidUserName,
        hasAtLeastMayus,
        hasAtLeastMinus,
        invalidChar: {
            hasInvalidChar,
            indexInvalidChar: hasInvalidChar? userName.match(invalidChar) : null
        },
        invalidSpace: {
            hasSpaces,
            indexInvalidChar: hasSpaces? invalidSpace.exec(userName).index : null
        },
        hasAtLeast8Char,
    }
}


let user_Password_Validator = (password) =>{

// USER NAME RESTRICTIONS BY REGEXP
    let validsChar = /^[\w\/.*+¿?¡!#&]{8,}$/
    let atLeastMayus = /[A-Z]+/
    let atLeastMinus = /[a-z]+/
    let invalidChar = /[\/.*+¿?¡!#&]+/g
    let invalidSpace = /\s+/
    let eightChar = /.{8,}/
return validsChar.test(password)
}

console.log(user_Password_Validator("28.04*92"))