const mongoose = require("mongoose")

//  defines a property in our documents which will be cast to its associated SchemaType

const noteSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
    {
      timestamps: true,
    }
  );
  
const Note = mongoose.model("Note", noteSchema);

module.exports = Note