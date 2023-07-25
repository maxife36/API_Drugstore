const express = require("express");
const server = express();
const routes = require("./Routes/index");
const { PORT } = require("dotenv").config().parsed;

server.use(express.json({ limit: "50mb" }));

server.use("/", routes);

const { sequelize } = require("./Models/index.js");

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("SINCRONIZACION CORRECTA");
    server.listen(PORT, () =>
      console.log(`SE CONECTO CORRECTAMENTE AL PUERTO ${PORT}`)
    );
  })
  .catch((err) => {
    console.log(err.message);
  });
