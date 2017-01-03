const Discord = require("discord.js");
const client = new Discord.Client();
const botCredentials = require("./config/config.js");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.author.bot) {
    return;
  }
  if (msg.isMentioned('265614426340720640')) {
    if (msg.content.startsWith('ping')) {
      msg.reply('Pong!');
    }
    else if (msg.content.includes('hello')) {
      msg.reply("Hey!");
    }
  }
});

client.login(botCredentials.token);
