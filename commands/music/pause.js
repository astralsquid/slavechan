const commando = require('discord.js-commando');

class PlayCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'pause',
            group: 'music',
            memberName: 'pause',
            description: 'Pauses current song in queue.',
            examples: ['!pause']
        }); //tells command we're being created
    }
    async run(message, args){
        message.channel.send("Pu-pu-pu-pu-pausing!")
    }
}

module.exports = PlayCommand;