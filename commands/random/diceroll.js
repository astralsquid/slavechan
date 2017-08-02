const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die',
            examples: ['!roll 6']
        }); //tells command we're being created
    }
    async run(message, args){
        args = message.content.split(/\s+/g);
        var sides = args[1];
        if(sides==null){
            sides = 6;
        }
        message.channel.sendMessage("Y-yes Master, I'll roll a " + sides + " sided die for you right away!");
        var roll = Math.floor(Math.random() * sides) + 1;
        if(sides > 0 && sides != 1){
            message.channel.sendMessage("U-um, you rolled a " + roll + " d-desu.");  
        }else if(sides == 0){
            message.channel.sendMessage("Zero sides? Um...I guess I wont roll a die at all then Master.");
        }else if(sides == 1){
            message.channel.sendMessage("M-master 1 is the only answer can you get! You aren't flirting with me a-are you?");
        }else{
            message.channel.sendMessage("Wait...a " + args[1] + " sided die???? B-baka! I can't roll a die with \"" + sides + "\"  sides!");
        }
    }
}
module.exports = DiceRollCommand;