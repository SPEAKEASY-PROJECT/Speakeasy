const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataStyle = require("../data/styles.json");

const localSchema = new Schema (
    {
    name: {
        type: String,
        required: 'Es necesario poner un nombre'
    },
    style: {
        type: String,
        enum: style,
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
        type: Image,
        min: [3, 'imágenes del local'],
        required: true
    }
    },
{
    timestamps: true
}
);

localSchema.index({ location: '2dsphere'});
module.exports = mongoose.model('Local', localSchema);
