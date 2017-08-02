const commando = require('discord.js-commando');

class SkipCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'skip',
            group: 'music',
            memberName: 'skip',
            description: 'Skips current song in queue.',
            examples: ['!skip']
        }); //tells command we're being created
    }
    async run(message, args){
        message.channel.send("Y-yes master, skipping a song.")
    }
}
module.exports = SkipCommand;