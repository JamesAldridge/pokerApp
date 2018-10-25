let mongoose = require('mongoose');

let PlayerSchema = new mongoose.Schema({
        pokerAlias: String,
        winnings: Number,
    },
    { collection: 'pokerdb' });

module.exports = mongoose.model('Player', PlayerSchema);
