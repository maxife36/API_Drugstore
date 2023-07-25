const Router = require("express")
const router = Router()
const fn = require("../API_Controller/_Users")

// ----------GET ENDPOINTS-----------

router.get("/UserValidation", )


// ----------POST ENDPOINTS-----------

router.post("/NewUser", fn.postNewUser)

// ----------PUT ENDPOINTS-------------


// ----------DELETE ENDPOINTS-----------




module.exports = router