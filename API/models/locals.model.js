const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataStyle = require("../data/styles.json");
// const bcrypt = require("bcrypt");   para poner password en los locales

const localSchema = new Schema (
    {
    name: {
        type: String,
        required: 'Es necesario poner un nombre'
    },
    style: {
        type: String,
        enum: ["Rock", "Dance", "Pop", "Indie"],
        required: 'Es necesario elegir un estilo'
    },
    address: {
        type: String,
        required: ' Es necesario poner una dirección'
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    capacity: {
        type: Number,
        min: [0, 'No hay una capacidad mínima'],
        max: [100, 'Capacidad máxima de personas en la sala'],
    },
    image: {
        type: String,
        min: [3, 'Imágenes del local'],
        required: false
    }
    },
{
    timestamps: true,
    toJSON:{
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = ret._id; 
            delete ret._id;
            delete ret.__v;
            return ret
        }
    }
}
); 
localSchema.virtual("rating", {
    ref:"Rating", 
    localField: "_id",
    foreignField: "local", 
    justOne:"true"
});

localSchema.index({ location: '2dsphere'});
module.exports = mongoose.model('Local', localSchema);
