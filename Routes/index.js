const { Router } = require("express");
let router = Router()

const userRoutes = require("./_Users")

router.use("/user", userRoutes)


module.exports= router