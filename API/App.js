require("dotenv").config();
const express = require("express");
const logger = require("morgan");

require("./configs/db.config");
const router = require ("./configs/routes.config");
const cors = require("./middlewares/cors.middleware");

const app = express();

//Spoty
require("./configs/spotify.config");

//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(cors)

//Routes
app.use("/api/v1", router);

//Errors
app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada'});
});
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({ message: 'Error interno del servidor'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Running on port ${port}`));