let mongoose = require('mongoose');
let TournamentSchema = ('tournament');

let PlayerSchema = new mongoose.Schema({
        pokerAlias: String,
        winnings: {type: Number, default: 0},
        tournaments: [TournamentSchema]
    },
    { collection: 'newtestdb' });

module.exports = mongoose.model('Player', PlayerSchema);
