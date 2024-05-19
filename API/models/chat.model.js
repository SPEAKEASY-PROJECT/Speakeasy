const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema (
    {
      owner: {
        type: String,
        ref: 'User',
        required: true
      },
      text: {
        type: String,
        required: [true, 'Escriba al menos un texto que contenga 5 letras']
      },
      // post: {
      //   type: Schema.Types.ObjectId,
      //   ref: 'postType'
      // },
      
    },
    { 
        timestamps: true,
        toJSON:{
            // virtuals: true,
            transform: (doc, ret) => {
                ret.id = ret._id; 
                delete ret._id;
                delete ret.__v;
                return ret
            }
        }
    }
  );
  
  
  module.exports = mongoose.model("Chat", chatSchema);