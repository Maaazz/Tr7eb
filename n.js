const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});

 client.on('message', message => {
  if (message.content === '!') {   
      if (message.author.id !== '445630664671232000')
 return message.react('⚠')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

 client.on('message', message => {
  if (message.content === '!!') {   
      if (message.author.id !== '445630664671232000')
 return message.react('🤦🏻‍♂️')
    const channel = message.member.voiceChannel;

    channel.leave()
  }
});

    
client.login("NDY3Nzc3Mjk5Nzk4ODE4ODI2.DivkRg.jnjWqY__Gr9er7kV0vj-p-ud_EE");
    
    
    
    
    
