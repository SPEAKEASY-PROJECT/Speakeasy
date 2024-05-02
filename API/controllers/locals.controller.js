const mongoose = require("mongoose");
const Local = require("../models/locals.model");

module.exports.create = (req, res, next) => {
    Local.create({
            name: req.body.name,
            style: req.body.style,
            address: req.body.address,
            location: req.body.location,
            coordinates: req.body.coordinates,
            capacity: req.body.capacity,
            image: req.body.image
        })
    .then((local) => 
        res.status(201).json(local))
    .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json(err.errors);
        } else {
            next(err);
        }
    });
};

module.exports.list = (req, res, next) => {
    Local.find()
        .then((locals) => 
            res.status(200).json(locals))
        .catch((next))
}


module.exports.detail = (req, res, next) => {
    Local.findById(req.params.id)
            .then((local => {
            if (local) {
                res.json(local)
            } else {
                res.status(404).json({ message: "No se ha encontrado el local"});
        }
    }))
        .catch(next)
};


module.exports.update = (req, res, next) => {
    Local.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
    })
    .then((local) => {
        if (local) {
            res.json(local);
        } else {
            res.status(404).json({ message: "No se ha encontrado el local"});
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
    Local.findByIdAndDelete(req.params.id)
    .then((local) => {
        if (local) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "El local se ha eliminado"});
        }
    })
    .catch(next)
 };