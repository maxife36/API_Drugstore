module.exports = {
    // ERRRO MESSAGES
    userNotFound : new Error("The User Does Not Exist"),
    existingUser: new Error("The Entered User Already Exist"),
    invalidUser : new Error("invalid User"),
    invalidPassword : new Error("invalid Password"),
    invalidMail : new Error("invalid Mail"),
    loginError : new Error("Username or password are incorrect"),



    // SUCCESS MESSAGES
    successfullyCreated: "The User has been successfully created"
}