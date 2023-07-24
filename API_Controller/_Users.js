const DB = require("../DB_Controller/_Users");
const Msg = require("../Utils/messages");

let postNewUser = async (req, res) => {
  try {

    let data = req.body;

    let user = await DB.create_User(data);
    
    res.status(200).send(Msg.successfullyCreated);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
