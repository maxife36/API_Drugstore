const { user } = require("../Models/index");
const V = require("../Utils/validations");
const Msg = require("../Utils/messages");

/*----------USER-----------
4- Modificar contraseña
5- Eliminar Usuario
*/

let create_User = async (data) => {

  //------------VALIDATIONS -----------
  let isValidUserName = V.user_Name_Validator(data.user).isValidUserName;
  let isValidUserPassword = V.user_Password_Validator(data.password).hasValidChar;
  let isValidMail =  V.mail_Validator(data.mail)

  //----------VERIFICATIONS -----------

  let existingUser = await get_User_Info(data);

  if(existingUser) throw Msg.existingUser
  if(!isValidUserName) throw Msg.invalidUser;
  if(!isValidUserPassword) throw Msg.invalidPassword;
  if(!isValidMail) throw Msg.invalidMail;

  //----------USER CREATION ---------------

  if (isValidUserName && isValidUserPassword && isValidMail) {
    
    data.user = V.userName_encrypting(data.user)
    data.password = V.password_encrypting(data.password);
    
    await user.create(data);
  }
};

let user_Login = async (data) => {

  let encryptedUser = V.userName_encrypting(data.user)
  let encryptedPassword = V.password_encrypting(data.password)

  let userInfo = await get_User_Info(data)

  if(!userInfo) throw Msg.userNotFound;

  let flag = (encryptedUser === userInfo.user) && (encryptedPassword === userInfo.password)

  if(!flag) throw Msg.loginError;
  
  return flag
};

let get_User_Info = async (data) => {
  let userName = V.userName_encrypting(data.user)

  let userInfo = await user.findOne({
    where: {
      user : userName
    }
  })

  return userInfo
}

let password_Modifier = async (data) => {
}

module.exports = {
  create_User,
  user_Login,
  get_User_Info,
  password_Modifier
};
