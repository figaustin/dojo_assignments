const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup required"],
        minlength: [3, "min length is 3"]
    },
    punchline:{
        type: String,
        required: [true, "punchline required"],
        minlength: [3, "min length is 3"]
    }
    },

    { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;