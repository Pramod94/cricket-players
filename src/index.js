var cricketPlayers = require('./cricket-players.json');
var randomPlayers = require('unique-random-array');

module.exports = {
    all: cricketPlayers.players,
    random: randomPlayers(cricketPlayers.players)
}
