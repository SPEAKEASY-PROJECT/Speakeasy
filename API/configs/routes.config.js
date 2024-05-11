const express = require("express");
const router = express.Router();
const locals = require("../controllers/locals.controller");
const users = require("../controllers/users.controller");
const rating = require("../controllers/rating.controller");
const auth = require("../middlewares/auth.middleware");

//Locals routes
router.post('/locals', auth.checkAuth, locals.create);
router.get('/locals', auth.checkAuth, locals.list);
router.get('/locals/:id', auth.checkAuth, locals.detail);
router.patch('/locals/:id', auth.checkAuth, locals.update);
router.delete('/locals/:id', auth.checkAuth, locals.delete);

//Rating routes
router.post('/locals/:id/rating', auth.checkAuth, rating.create);
router.delete('/locals/:id/rating/:id', auth.checkAuth, rating.delete);

//Users routes
router.post('/users', users.create);
router.post('/login', users.login);
router.get('/users', auth.checkAuth, users.list);
router.get('/users/:id', auth.checkAuth, users.detail);
router.patch('/users/:id', auth.checkAuth, users.update);
router.delete('/users/:id', auth.checkAuth, users.delete);

router.profile

module.exports = router;