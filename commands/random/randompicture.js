const commando = require('discord.js-commando');
const randomPuppy = require('random-puppy');

class RandomPictureCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'picture',
            group: 'random',
            memberName: 'picture',
            description: 'links a random picture from imgur',
            examples: ['!picture']
        }); //tells command we're being created
    }
    async run(message, args){
        var chars = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'; 
        message.channel.sendMessage("Y-yes master, here's a random picture. I hope it's nothing l-lewd...");
        var stringlength = 5; /* could be 6 or 7, but takes forever because there are lots of dead images */
        var text = '';
      for (var i = 0; i < stringlength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        text += chars.substring(rnum,rnum+1);
      }
        var source = 'https://i.imgur.com/' + text;
        message.channel.sendMessage(source);
    }
}

module.exports = RandomPictureCommand;
