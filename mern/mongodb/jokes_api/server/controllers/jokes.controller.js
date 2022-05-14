const Joke = require ("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {res.json({ joke: oneSingleJoke })})
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.getRandomJoke = (req, res) => {
    Joke.count().exec(function (err, count){

        var random = Math.floor(Math.random() * count);

        Joke.findOne().skip(random).exec()
            .then(randomJoke => res.json({ joke: randomJoke }))
            .catch(err => res.json({ message: "Something went wrong", error: err}));
    })
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true})
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};
