const express = require("express");
const router = express.Router();
const locals = require("../controllers/locals.controller");
const users = require("../controllers/users.controller");
const rating = require("../controllers/rating.controller");


//Locals routes
router.post('/locals', locals.create);
router.get('/locals', locals.list);
router.get('/locals/:id', locals.detail);
router.patch('/locals/:id', locals.update);
router.delete('/locals/:id', locals.delete);

//Rating routes
router.post('/locals/:id/rating', rating.create);
router.delete('/locals/:id/rating/:id', rating.delete);

//Users routes
router.post('/users', users.create);
router.post('/login', users.login);
router.get('/users', users.list);
router.get('/users/:id', users.detail);
router.patch('/users/:id', users.update);
router.delete('/users/:id', users.delete);

module.exports = router;