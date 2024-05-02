const Rating = require("../models/rating.model");
const mongoose = require("mongoose");

module.exports.create = (req, res, next) => {
    Local.findById(req.params.id)
    .then(local => {
        if (local) {
            Rating.create({
                rating: req.body.rating,
                local: req.params.id })
                .then((rating) => {
                    res.json(rating);
                })
                .catch((err) => {
                    if (err instanceof mongoose.Error.ValidationError) {
                        res.status(400).json(err.errors);
                    } else {
                        next(err);
                    }
                });

        } else {
            res.status(404).json({ message: 'El local no existe'})
        }
    })
    .catch(next)
}

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