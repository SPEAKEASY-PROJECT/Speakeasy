const express = require("express");
const app = express();


//Midleware
app.use("/api", router);












const port = 3000;
app.listen(port, () => console.info(`Running on port ${port}`));