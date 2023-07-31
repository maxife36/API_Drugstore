const Router = require("express")
const router = Router()
const fn = require("../API_Controller/_Users")

// ----------GET ENDPOINTS-----------

router.get("/UserValidation", fn.userNameValidation )
router.get("/PasswordValidation", fn.userPasswordValidation )
router.get("/UserLogin", fn.userLogin )
router.get("/UserInfo", fn.userInfo ) //PROVISORIO


// ----------POST ENDPOINTS-----------

router.post("/NewUser", fn.postNewUser)

// ----------PUT ENDPOINTS-------------


// ----------DELETE ENDPOINTS-----------




module.exports = router