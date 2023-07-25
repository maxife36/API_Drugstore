const DB = require("../DB_Controller/_Users");
const V = require("../Utils/validations")
const Msg = require("../Utils/messages");

let userNameValidation = (req, res) =>{
  try {
    let userName = req.body
    let validation = V.user_Name_Validator(userName)

    res.status(200).send(validation)

  } catch (err) {
    res.status(400).send(err.message)
  }
}

let postNewUser = async (req, res) => {
  try {

    let data = req.body;
// FALTA verificar si existe en DB antes de crear
    await DB.create_User(data);
    
    res.status(200).send(Msg.successfullyCreated);
  } catch (err) {
    res.status(400).send(err.message);
  }
};


module.exports= {
  postNewUser,
  user_Name_Validation
}