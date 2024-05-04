const express = require("express");
const router = express.Router();
const locals = require("../controllers/locals.controller");
const users = require("../controllers/users.controller");

//Locals routes

router.post('/locals', locals.create);
router.get('/locals', locals.list);
router.get('/locals/:id', locals.detail);
router.patch('/locals/:id', locals.update);
router.delete('/locals/:id', locals.delete);

//Rating routes


//Users routes
router.post('/users', users.create);
router.post('/login', users.login);






module.exports = router;