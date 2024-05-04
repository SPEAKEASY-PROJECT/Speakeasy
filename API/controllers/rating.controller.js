const Rating = require("../models/rating.model");
const Local = require("../models/locals.model");
const mongoose = require("mongoose");

module.exports.create = (req, res, next) => {
    Local.findById(req.params.id)
    .then((local) => {
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
};


module.exports.delete = (req, res, next) => {
    Rating.find({
      local: req.params.id,
    })
//       .populate("local")
//       .populate("author")
      .then((rating) => {
        res.json(rating);
      })
      .catch(next);
  };
