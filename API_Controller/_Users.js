const DB = require("../DB_Controller/_Users");
const V = require("../Utils/validations")
const Msg = require("../Utils/messages");

//------------- GET -------------------

let userNameValidation = (req, res) =>{
  try {
    let userName = req.body.user
    let validation = V.user_Name_Validator(userName)

    res.status(200).send(validation)

  } catch (err) {
    res.status(400).send(err.message)
  }
}
let userPasswordValidation = (req, res) =>{
  try {
  let password = req.body.password
  let validation = V.user_Password_Validator(password)
  

    res.status(200).send(validation)

  } catch (err) {
    res.status(400).send(err.message)
  }
}
let userLogin = async (req,res) => {
  try {
    let data = req.body
    let response = await DB.user_Login(data)

    res.status(200).send(response)
    
  } catch (err) {

    res.status(400).send(err.message)
    
  }
}
let userInfo = async (req,res) => {
  try {
    let data = req.body

    let userInfo = await DB.get_User_Info(data)

    res.status(200).send(userInfo)
    
  } catch (err) {
    res.status(400).send(err.message)
    
  }

} //PROVISORIO

//--------------------- POST --------------------

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
  userNameValidation,
  userPasswordValidation,
  userLogin,
  userInfo
}