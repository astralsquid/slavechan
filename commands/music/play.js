const commando = require('discord.js-commando');

class PlayCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Plays audio from a youtube link.',
            examples: ['!play https://www.youtube.com/watch?v=vTIIMJ9tUc8%22']
        }); //tells command we're being created
    }
    async run(message, args){
        message.channel.send("Y-yes master, queueing the track now.")
    }
}

module.exports = PlayCommand;