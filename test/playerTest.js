const Player = require ('../models/player'),
    playerRouter = require('../routes/player'),
    router = express.Router();
    assert = require('assert');

describe('Player', () => {
    testPlayer = new Player({
        pokerAlias: 'JohnSmith85'
    });

    describe('saving', () => {

        it('saves player to database', () => {
            assert(testPlayer.isNew); //assert player is not saved first

            testPlayer.save().then(() => {
                assert(testPlayer.isNew === false);
            })
        });
    });

    describe('attributes', () => {

        it('player is assigned correct default values', () => {
            assert(testPlayer.pokerAlias === 'JohnSmith85');
            assert(testPlayer.winnings === 0);
        });

        it('player tournaments updates succesfully', () => {
            //need to mock http request
        });
    });
});


