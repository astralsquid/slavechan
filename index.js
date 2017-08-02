const commando = require('discord.js-commando');
const discord = require('discord.js');
const ytdl = require("ytdl-core");

const Client = require('discord.js').Client;
const music = require('discord.js-music-v11');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
var connection;
//bot.login('MzQxNjc2NjczOTM2MjYxMTIw.DGEwTQ.3v0XnSc3g-hWAfG8LYiqQMciqiw');
bot.login('MzQxNjc2NjczOTM2MjYxMTIw.DGEwTQ.3v0XnSc3g-hWAfG8LYiqQMciqiw');
//let channel = bot.channels.get('341707156145307658');

var servers = {};

const client = new Client();
music(client);
client.login('MzQxNjc2NjczOTM2MjYxMTIw.DGEwTQ.3v0XnSc3g-hWAfG8LYiqQMciqiw');

client.on("message", m => {
	// A message containing exactly `&init` will make the bot join the first
    // available voice channel
	if (m.content === "slave chan go to your room") {
        console.log(client.channels.get('341707156145307658'));
         client.channels.get('341707156145307658').join();
        m.channel.send("H-here master!");
    }
});

//music 






