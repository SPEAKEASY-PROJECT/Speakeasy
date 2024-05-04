const mongoose = require("mongoose");
const User = require ("../models/users.model");
const { v4:uuidv4 } = require("uuid");

module.exports.create = (req, res, next) => {
    User.create({
        name: req.body.name,
        birthDate: req.body.birthDate,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
        coordinates: req.body.coordinates,
        capacity: req.body.capacity,
        avatar: req.body.avatar
    })
    .then((user) => 
    res.status(201).json(user))
    .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json(err.errors);
       } else {
        next(err);
        }
    });
};

const sessions = [];

module.exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then((user) => {
        if (user) {
            user
            .checkPassword(req.body.password)
            .then((match) => {
                if (match) {
                    const sessionId = uuidv4();
                    sessions.push({ userId: user.id, sessionId });

                    res.set("Sey-Cookie", `sessionId=${sessionId}`)
                    res.send();
                } else {
                    res.status(401).json({ message: "Credenciales inválidas" });
                }
            })
            .catch(next);
        } else {
            res.status(401).json({ message: "Credenciales incorrectas" });
        }
    })
    .catch(next)
};

module.exports.list = (req, res, next) => {
    User.find()
        .then((users) => 
            res.status(200).json(users))
        .catch((next))
}

module.exports.detail = (req, res, next) => {
    User.findById(req.params.id)
            .then((user) => {
            if (user) {
                res.json(user)
            } else {
                res.status(404).json({ message: "No se ha encontrado usuario"});
        }
    })
        .catch(next)
};


module.exports.update = (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
    })
    .then((user) => {
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "No se ha encontrado el usuario"});
        }
    })
    .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json(err.errors);
        } else {
            next(err);
        }
    });
};

module.exports.delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
    .then((user) => {
        if (user) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "El usuario ha sido eliminado"});
        }
    })
    .catch(next)
 };


// module.exports.profile = (req, res) => {
//     res.json(req.user);
// };
