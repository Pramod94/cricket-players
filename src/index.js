var cricketPlayers = require('./cricket-players.json');
var uniqueRandomAry = require('unique-random-array');

module.exports = {
    all: cricketPlayers,
    random: uniqueRandomAry(cricketPlayers.players)
}
