const { user } = require("../Models/index");
const V = require("../Utils/validations");
const Msg = require("../Utils/messages");

/*----------USER-----------

1- Creacion de Usaurio y Contraseña
    1.1 - Validacion de nombre de Usaurio
    1.2 - Validacion de tipo de contraseña
2- Log in de Usaurio
3- Buscador de Usaurio
4- Modificar contraseña
5- Eliminar Usuario
*/

let create_User = async (data) => {
  let isValidUserName = V.user_Name_Validator(data.user).isValidUserName;
  let isValidUserPassword = V.user_Password_Validator(data.password).hasValidChar;

  if (isValidUserName && isValidUserPassword) {
    await user.create(data)
  }
};

module.exports = {
    create_User
}