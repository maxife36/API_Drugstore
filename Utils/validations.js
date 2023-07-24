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

    let haveValidChar = validsChar.test(userName)
    let haveAtLeastMayus = atLeastMayus.test(userName)
    let haveAtLeastMinus = atLeastMinus.test(userName)
    let haveInvalidChar = invalidChar.test(userName)
    let haveSpaces = invalidSpace.test(userName)
    let haveAtLeast8Char = eightChar.test(userName)
    
    let isValidUserName = haveValidChar && haveAtLeastMayus && haveAtLeastMinus && !haveInvalidChar && !haveSpaces && haveAtLeast8Char

    return {
        isValidUserName,
        haveAtLeastMayus,
        haveAtLeastMinus,
        invalidChar: {
            haveInvalidChar,
            indexInvalidChar: haveInvalidChar? userName.match(invalidChar) : null
        },
        invalidSpace: {
            haveSpaces,
            indexInvalidChar: haveSpaces? invalidSpace.exec(userName).index : null
        },
        haveAtLeast8Char,
    }
}


let user_Password_Validator = (password) =>{

// USER NAME RESTRICTIONS BY REGEXP
    let validsChar = /^\w$/

}
