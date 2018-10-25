let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const credentials = require('../credentials');

let Player = require('../models/player');

mongoose.connect(credentials.mongodbUri);

let db = mongoose.connection;

db.on('error', function (err) {
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function () {
    console.log('Successfully Connected to [ ' + db.name + ' ]');
});

router.findAllPlayers = (req, res) => {
    // Return a JSON representation of our list
    res.setHeader('Content-Type', 'application/json');

    Player.find(function(err, players) {
        if (err)
            res.send(err);

        res.send(JSON.stringify(players,null,5));
    });
}

router.findOnePlayer = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    Player.find({ "_id" : req.params.id },function(err, player) {
        if (err) {
            // return a suitable error message
            res.send(JSON.stringify(err, null, 5));
        }
        else {
            res.send(JSON.stringify(player, null, 5));
        }
    });
}

router.addPlayer = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    var player = new Player();

    player.name = req.body.name// the requested value
    player.netwinnings = req.body.amount// the requested value

    player.save(function(err) {
        if (err) {
            // return a suitable error message
            res.json('Could not add player');
        }
        else {
            // return a suitable success message
            res.json({ message: 'Player added', data: player});
        }
    });
}

router.deletePlayer = (req, res) => {

    Player.findByIdAndRemove(req.params.id, function(err) {
        if (err)
        {
            res.json('player delete failed');
        }
        else
            res.json('player deletion was succesfull');
    });
}


module.exports = router;
