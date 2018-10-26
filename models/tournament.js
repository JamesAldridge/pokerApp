let mongoose = require('mongoose');

let TournamentSchema = new mongoose.Schema({
    name: String,
    ranking: Number,
    entries: Number,
    buyIn: Number,
    winnings: Number,
});

module.exports = mongoose.model('Tournament', TournamentSchema);
