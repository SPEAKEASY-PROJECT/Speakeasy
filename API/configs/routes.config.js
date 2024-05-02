const express = require("express");
const router = express.Router();
const locals = require("../controllers/locals.controller");

//Locals routes

router.post('/locals', locals.create);
router.get('/locals', locals.list);
router.get('/locals/:id', locals.detail);
router.patch('/locals/:id', locals.update);
router.delete('/locals/:id', locals.delete);

//Rating routes


//Users routes






module.exports = router;