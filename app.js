const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config/config.js");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.author.bot) {
    return;
  }
  if (msg.isMentioned(config.botId)) {

    let command = msg.content.split(" ")[1];
    let args = msg.content.split(" ").slice(2);

    if (command === 'ping') {
      msg.reply('Pong!');
    }
    else if (command === 'Hello') {
      msg.reply("Hey!");
    }
    else if (command === 'add') {
      let numArray = args.map(n => parseInt(n));
      let total = numArray.reduce( (p, c) => p+c);

      msg.reply("The sum is " + total);
    }
  }
});

client.login(config.token);
