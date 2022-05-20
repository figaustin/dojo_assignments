const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "name required"],
        minlength: [3, "Author's name must be at least 3 characters long!"]
    }
    
    },

    {timestamps: true}

);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;

