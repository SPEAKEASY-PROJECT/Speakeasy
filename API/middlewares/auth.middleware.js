const jwt = require("jsonwebtoken");
const User = require("../models/users.model");

module.exports.checkAuth = ( req, res, next) => {
    console.log(req.headers?.authorization)
    const [method, token] = req.headers?.authorization?.split(' ');
    console.log("TOKEN", token)
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
           return res.status(401).json({ message: err.message });
        } else {
            const sub = decoded.sub;

        User.findById(sub) 
            .then((user) => {
                if (user) {
                    req.user = user;
                    next()
                } else {
                    res.status(401).json({ message: "Acceso no autorizado" });
                }
            })
            .catch(next);
    }
});
}; 