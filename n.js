const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});

 client.on('message', message => {
  if (message.content === '!join') {   
      if (message.author.id !== '445630664671232000')
 return message.react('')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

 client.on('message', message => {
  if (message.content === '!leave') {   
      if (message.author.id !== '445630664671232000')
 return message.react('')
    const channel = message.member.voiceChannel;

    channel.leave()
  }
});

    
client.login(process.env.BOT_TOKEN)
    
    
