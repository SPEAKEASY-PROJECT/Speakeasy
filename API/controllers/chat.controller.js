const mongoose = require("mongoose");
const Chat = require("../models/chat.model");

module.exports.create = (req, res, next) => {
    Chat.create({
        owner: req.body.owner,
        text: req.body.text,
        // post: req.body.post,
    })
      .then((chat) => res.status(201).json(chat))
      .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json(err.errors);
        } else {
            next(err);
        }
    });
};
  
  
  module.exports.detail = (req, res, next) => {
    Chat.findById(req.params.id)
    //   .populate("post")
      .then((chat) => {
        if (chat) {
            res.json(chat)
        } else {
            res.status(404).json({ message: "No se ha encontrado el mensaje"});
    }
})
    .catch(next)
};
  

  module.exports.update = (req, res, next) => {
    Chat.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
    })
    .then((chat) => {
        if (chat) {
            res.json(chat);
        } else {
            res.status(404).json({ message: "Mensaje no encontrado, no se puede actualizar"});
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
    Chat.findByIdAndDelete(req.params.id)
      .then((chat) => {
        if (chat) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "El mensaje ha sido eliminado"});
        }
    })
    .catch(next)
 };
