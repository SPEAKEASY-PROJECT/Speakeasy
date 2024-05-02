const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema(
    {
        rating: {
            type: Number,
            min: [0, "Mínimo de estrellas"],
            max: [5, "Máximo de estrellas"],
            required: true
        },
        local: {
            type: Schema.Types.ObjectId,
            ref: "Local",
        }
        
    },
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            }
            
        }
    }
);

module.exports = mongoose.model('Rating', ratingSchema);
