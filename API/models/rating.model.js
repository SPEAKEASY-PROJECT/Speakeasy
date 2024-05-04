const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema(
    {
        rating: {
            type: Number,
            min: 0,
            max: 5
          },
        
        local: {
            type: Schema.Types.ObjectId,
            ref: "Local",
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        
    },
       { timestamps: true,
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
