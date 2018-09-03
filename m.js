const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";
const fs = require ("fs")
const moment = require('moment');
var Canvas = require('canvas')
var jimp = require('jimp')
var shortNumber = require('short-number');





client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[user] ${client.users.size}`)
    client.user.setStatus("ldle")
});

 client.on('ready', () => {
     client.user.setActivity("-help",{type: 'PLAYING'});

});

//let args = message.content.split(" ").slice(1);


client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith("-ping")) {
    message.channel.sendMessage(`**Time Taken : **\`${Date.now() - message.createdTimestamp} ms\`
**Discord API :** \`${Math.round(client.ping)}\` `);
    }
});
  
  client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor("CloudBot")
 .addField(`**Your Invites : **`, ` \`${inviteCount}\` `)
           .setFooter(`${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
  
 client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("-avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL} `);
}
});

client.on('message', function(message) {

            

    if(message.content.startsWith (prefix  + 'server')) {
          let guild = message.guild;
  let icon = message.guild.iconURL;
  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let humans = message.guild.members.filter(m => !m.user.bot).size;
  let channels = message.guild.channels.size;
  let textChannels = message.guild.channels.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
  let emojis = [];
  guild.emojis.forEach(emoji => {
  emojis.push(`\`${emoji}\``);
  });
  emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

  let roles = [];
  guild.roles.forEach(role => {
    roles.push(`\`${role.name}\``);
  });
  roles = roles.join(", ");

  let embed = new Discord.RichEmbed()
  .setTitle(`Server Stats`)
  .setThumbnail(icon)
  .addField('Guild Name', guild.name, true)
  .addField('Guild ID', guild.id, true)
  .addField('Guild Owner', `${guild.owner.user.tag}`, true)
  .addField('Created At', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
  .addField('Region', guild.region.toUpperCase(), true)
  .addField('Total Members:', guild.memberCount, true)
  .addField('Bots:', bots, true)
  .addField('Users:', humans, true)
  .addField('Verification Level', guild.verificationLevel, true)
  .addField('Text Channels', textChannels, true)
  .addField('Voice Channels', voiceChannels, true)
  .addField(`Roles`, `${guild.roles.size}`, true)
  .addField(`Emojis`, `${guild.emojis.size}`, true)

      message.channel.send({embed:embed});
    }
  });
  




client.on('message' , message => {
  if(message.content.startsWith(`<@472811515863498762>`)){
             message.channel.send(`Hi ${message.author}
**My Prefix is :** \`${prefix}\` , **To See Al Commands Type : ** \`${prefix}help\``)
}
          });

client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\`\`\`${message.content}\`\`\``)
                    .setFooter(`CloudBot :Cloud: | Direct Message .`)
client.users.get("445630664671232000").send(yumz)
            }
});

client.on('message', msg => {
 if (msg.content.startsWith("-Delcha")) {
    if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.reply('**⚠ لا يوجد لديك صلاحية**');
     msg.guild.channels.forEach(c => { c.delete() })
             msg.reply('**Done i Delete All Channels**')
 }
 });

client.on('message', msg => {
 if (msg.content.startsWith("-Delrol")) {
    if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.reply('**⚠ لا يوجد لديك صلاحية**');
     msg.guild.roles.forEach(r => { r.delete() }) 
             msg.reply('**Done i Delete All Roles**')
 }
 });



      client.on('message' , message => {
  if(message.content.startsWith('-Game')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
        message.guild.createChannel('Game Area', 'category').then(cg => {
        message.guild.createChannel('Black Squad', 'voice').then(ch => {
        message.guild.createChannel('Fortnite', 'voice').then(a7a => {
        message.guild.createChannel('Brawlhalla', 'voice').then(a7aa=> {
        message.guild.createChannel('Brawlhalla', 'voice').then(a7aaa=> {
        message.guild.createChannel('MineCraft', 'voice').then(a7aaaa => {
            ch.setParent(cg)
            a7a.setParent(cg)
            a7aa.setParent(cg)
            a7aaa.setParent(cg)
            a7aaaa.setParent(cg)
            

               	        message.reply('**I Make Games Rooms **')
            
        });})
           })
})
})
})





}
          });

      client.on('message' , message => {
  if(message.content.startsWith('-Voice')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
        message.guild.createChannel('Voice Area', 'category').then(cg => {
        message.guild.createChannel('Relax', 'voice').then(cha => {
        message.guild.createChannel('Coffe', 'voice').then(a7aa => {
        message.guild.createChannel('Cronner', 'voice').then(a7aaa=> {
        message.guild.createChannel('Music', 'voice').then(a7aaaa => {
            cha.setParent(cg)
            a7aa.setParent(cg)
            a7aaa.setParent(cg)
            a7aaaa.setParent(cg)

               	        message.reply('**I Make Voice Rooms **')
        });})
           })
})
})

}
          });
          
                client.on('message' , message => {
  if(message.content.startsWith('-Private')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
        message.guild.createChannel('Private Area ', 'category').then(cg => {
        message.guild.createChannel('[ 1 ] Private', 'voice').then(chi => {
        message.guild.createChannel('[ 2 ] Private', 'voice').then(a7ai => {
        message.guild.createChannel('[ 3 ] Private', 'voice').then(a7aai=> {
        message.guild.createChannel('[ 4 ] Private', 'voice').then(a7aaai => {
        message.guild.createChannel('[ 5 ] Private', 'voice').then(a7aaaai => {
            chi.setParent(cg)
            a7ai.setParent(cg)
            a7aai.setParent(cg)
            a7aaai.setParent(cg)
            a7aaaai.setParent(cg)

               	        message.reply('**I Make Private Rooms **')
        });
            
            
        })
           })
})
})
})


        


}
          });

                client.on('message' , message => {
  if(message.content.startsWith('-Text')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
        message.guild.createChannel('Text Area', 'category').then(cg => {
        message.guild.createChannel('Info', 'Text').then(chi => { 
        message.guild.createChannel('News', 'Text').then(a71 => {
        message.guild.createChannel('Chat', 'Text').then(a72=> {
        message.guild.createChannel('Cmd', 'Text').then(a73 => {
        message.guild.createChannel('Ava', 'Text').then(a74 => {
        message.guild.createChannel('Bo7', 'Text').then(a76 => {
            chi.setParent(cg)
            a71.setParent(cg)
            a72.setParent(cg)
            a73.setParent(cg)
            a74.setParent(cg)
            a76.setParent(cg)

               	        message.reply('**I Make Text Rooms **')
        });
    

})
           })
})
})
})
})




}
          });

client.on('message', message => {
    if (message.content === "-Roles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: ".King", permissions: [2146958839] })
                     message.guild.createRole({ name: ".Pride",  permissions: [2146958839] })
                     message.guild.createRole({ name: ".Great",  permissions: [2146958711] })
                     message.guild.createRole({ name: ".Powerful",  permissions: [1073215843] })
                     message.guild.createRole({ name: ".Bright",  permissions: [536344899] })
                     message.guild.createRole({ name: ".Fable",  permissions: [267909441] })
                     message.guild.createRole({ name: ".Gentle",  permissions: [133683521] })
                     message.guild.createRole({ name: ".Classy",  permissions: [83351617] })
                     message.guild.createRole({ name: ".Staffs",  permissions: [70637633] })
                     message.guild.createRole({ name: "Old Friends",  permissions: [70637633] })
                     message.guild.createRole({ name: "Bots",  permissions: [70572097] })
                     message.guild.createRole({ name: "User",  permissions: [70572097] })
        

               	        message.reply('**I Make Roles **')        
    }
});




client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(message.member.hasPermission("KICK_MEMBERS")) return (
            
           message.guild.member(toKick).kick()).then(() => 
           message.channel.send(`:white_check_mark: **${toKick} Kickked from the server!** :airplane:`))
       
       }
});

client.on('message',function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + 'ban')) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(message.member.hasPermission("BAN_MEMBERS")) return (
            
           message.guild.member(toBan).ban()).then(() => 
           message.channel.send(`:white_check_mark: **${toBan} Banned from the server!** :airplane:`))
       
       }
});
  

client.on('message', message => {
if (message.content === '-help'){
message.channel.send(`

:one: **: Genral -** \`invite\` \`ping\` \`user\` \`invites\` \`server\` \`vc\` \`bot\` \`rank\` \`avatar\` \`count\` \`roles\` \`channels\` \`Dm\`

:two: **: Admin - ** \`bc\` \`Voice\` \`Private\` \`Game\` \`Roles\` \`clear\` \`Delcha\` \`Delrol\` \`ban\` \`kick\` \`nickname\`

:three: **: Fun - ** \`cat\` \`punch\` \`animal\` \`rps\` \`slots\` \`search\` \`Lmgtfy\` 


`);
}});
    

    
  client.on('message', message => {
if(message.content.startsWith("-slots")) {
  let slots = ["🍎",  "🍌", "🍒", "🍓", "🍈"];
  let slots1 = `${slots[Math.floor(Math.random() * slots.length)]}`;
  let slots2 = `${slots[Math.floor(Math.random() * slots.length)]}`;
  let slots3 = `${slots[Math.floor(Math.random() * slots.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "**Win. **"
  } else {
    we = "**Lose.**"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
  
    
  const snekfetch = require("snekfetch");
  client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + `cat`)) {
            const { body } = await snekfetch.get("http://aws.random.cat/meow");
            return message.channel.send({ file: body.file });
}}});
  
        
client.on('message',  (message) => {
        if(message.content.startsWith('-punch')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return ;
  }
  let punches = [
    'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif',
    'https://media.giphy.com/media/sRgD8LyikpFO8/giphy.gif',
    'https://media.giphy.com/media/xT77Y9wvUx4iSsPaNi/giphy.gif',
    'https://media.giphy.com/media/AdrRtrWyItfWw/giphy.gif',
    'https://media.giphy.com/media/nwbPvQbFAJPEc/giphy.gif',
    'https://media.giphy.com/media/SzC42gUrhHopW/giphy.gif',
    
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} **Give You Punch** : ${user.username} :punch:`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message', message => {
      if(message.content.startsWith("-rst")){
      		      if(!message.channel.guild) return message.reply('**:no_entry_sign: This command cannot be used in Direct messages ! **')
        if(message.author.id !== "445630664671232000") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {  
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**:white_check_mark: **');
            },2000);
        });
                        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
        },3000);
    }
});


var PrEfix = "-";
client.on('message', message => {
  if (!message.content.startsWith(PrEfix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '445630664671232000') return;

if (message.content.startsWith(PrEfix + 'playing')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 'watching')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
} 

if (message.content.startsWith(PrEfix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed :white_check_mark:  `);
}

if (message.content.startsWith(PrEfix + 'listeneing')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 'streming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});
client.on('guildCreate', guild => {
    guild.owner.send(`Hi Im **CloudBot** ,  
**My Prefix is :** \`${prefix}\` , **To See Al Commands Type : ** \`${prefix}help\` 
And Thx For you For Invite Me To Your Server 
`)
})


client.on('message' , message => {
if(message.content === '-vc') {
    message.channel.send(`**Voice Online Members Now Are:** \`${message.guild.members.filter(g => g.voiceChannel).size}\` **Members!**`);
    
}
});






  client.on('message', message => { 

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author

 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor("#0a0909")
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
    .addField(': عدد الدعوات', inviteCount,false)
.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  

 
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

var version = '11.0.0';
client.on('message', message => {
if (message.content === prefix+'bot'){
     if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
.setDescription(`**
  \`My Prefix\` : ${prefix}
  \`Ping\` :rocket: : ${Date.now() - message.createdTimestamp}
  \`Servers\` :globe_with_meridians: : ${client.guilds.size}
  \`Users \` :busts_in_silhouette: : ${client.users.size}
  \`Channels\` :books: : ${client.channels.size}
  \`RAM Using\` 📝 : ${(process.memoryUsage().rss / 1048576).toFixed()}MB
  **`)
.setAuthor(message.author.username, message.author.avatarURL)
    message.channel.sendEmbed(embed)
    console.log('[bot] Send By: ' + message.author.username)
}
});

client.on("message", message => {
  if (message.content.startsWith("-bc")) {
let args = message.content.split(" ").slice(1);
var argresult = args.join(' ');
message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\` Number of recipients  `);
message.delete();
};
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("**Please supply a number less than** \`100 \`").then(m => m.delete(3000));} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send(`**Successfully Deleted \`${args}\` Messages**`)
        .then(m => m.delete(4000));

        }    
    }
}
});

client.on('guildCreate', guild => {
  client.channels.get("481786624431095808").send(`:white_check_mark: **Bot Join To Server **
**Server name:** \`${guild.name}\`
**Server owner:** \`${guild.owner}\`
**Server id: \`${guild.id}\` 
**Server Count: \`${guild.memberCount}\``)
});
client.on('guildDelete', guild => {
  client.channels.get("481786624431095808").send(`:x: **Bot Left From The Server **
**Server name:** \`${guild.name}\`
**Server owner:** \`${guild.owner}\`
**Server id:** \`${guild.id}\`
**Server Count:** \`${guild.memberCount}\``)
});

client.on('message' , maazchy => {
var i = 1;
var prefix = "-";
    if(maazchy.content.startsWith(prefix +'servers')) {
                if(maazchy.author.id !== "445630664671232000") return maazchy.reply('You aren\'t the bot owner.');
client.guilds.map(g => { 
var l = g.id;
g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(s => {
maazchy.channel.send(`
#**${i++}-${g}** - \`${g.members.size} members\` - **Owner** ${maazchy.guild.owner} - **Link :** https://discord.gg/${s.code} `);
})
    })    
    }
});

client.on('message',async message =>{
    if(message.content.startsWith(prefix + "channels")) {
        let i = 1;
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL)
        .setDescription(message.guild.channels.map(c => `\`${i++}\` - **${c.name}**`))
        .setFooter(message.guild.channels.size + ' Channels in the server!');
        message.channel.send(embed).then(msg => {
            msg.delete(25000);
            message.delete(25000);
        });
    }
});

client.on('message',async message =>{
    if(message.content.startsWith(prefix + "roles")) {
        let i = 1;
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL)
        .setDescription(message.guild.roles.map(r => `\`${i++}\` - **${r.name}**`))
        .setFooter(message.guild.roles.size + ' roles in the server!');
        message.channel.send(embed).then(msg => {
            msg.delete(25000);
            message.delete(25000);
        });
    }
});

  client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + `Lmgtfy`)) {
            const textQuery = message.content.split(' ').slice(1).join(' ');
        const even = (message.content.split(' ').slice(1).join(' '));
        const url = `https://lmgtfy.com/?q=${even}`;

        if (!even) return message.channel.send(`**Example , Type : **\`Lmgtfy How To Create Bot in Discord\` .`);
        else message.channel.send(`"${textQuery}"\n**<${url}>**`);
}}});



client.on('message' , message => {
if(message.content === '-count') {
    message.channel.send(`**Server Name : __${message.guild.name}__**  , **Server Avatar :** ${message.guild.iconURL} , **Members : ** \`${message.guild.memberCount}\``);
    
}
});

client.on("message",  message => {
    let args = message.content.split(' ').slice(1);
if(message.content.startsWith(prefix + 'nickname')) {
   if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
       message.channel.send("Type Name")
   } else {
       if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
       let changenick = message.mentions.users.first();
       let username = args.slice(1).join(' ')
       if (username.length < 1) return message.reply('Type The Name').catch(console.error);
       if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);
       message.guild.member(changenick.id).setNickname(username);
       message.channel.send("**Name Change To :** " + changenick + "")
   }
}});



client.on("message", function(message) {
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**- Rock**','**- Paper**','**- Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username,message.author.avatarURL)
    .addField("Rock","🇷")
    .addField("Paper","🇵")
    .addField("Scissors","🇸")
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'Dm')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**Mention Some One .**`)
      if (!args[1]) return msg.reply(`**Type The Message To Send Him**`)
      let Emoko = msg.mentions.members.first()
      let EmokoEmbed = new Discord.RichEmbed()
      .color("RANDOM")
      .setTitle(`New Massage :envelope_with_arrow:`)
      
      .setDescription(args.join("** **"))

      client.users.get(`${Emoko.id}`).send(EmokoEmbed)
      msg.reply(`**Message Has Been Sent :envelope:**`)
      }
});

client.on('message', message => { 
  if(message.content.startsWith(prefix + "search")) {
    const args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] !== `${prefix}search`) return;
    var Search = require('youtube-search'),
    opts = {maxResults: 1, key: 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8', type: 'video'}

    Search(args, opts, function(err, results) {
      if(err) return console.log(err);

      console.log(results);
      message.channel.send(results[0].link);
    });
  }
});
  
client.on('message' , message => {
if(message.content === '-time') {
          var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
    message.channel.send(`**Time  : ${hours} - ${minutes} - ${Seconds} ${suffix}**`);
    
}
});

client.on('message' , message => {
if(message.content === '-date') {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
    message.channel.send(`**Date : ${Year} - ${Month} - ${Dat}**`);
    
}
});




client.on('message', function(message) {

            

    if(message.content.startsWith (prefix  + 'id')) {
         var mm = message.mentions.members.first();
const moment = require("moment");
const ms = require('ms');      let embed = new Discord.RichEmbed()

  let role = message.member.roles.map(r => `${r.name}`)
  
  
  let uEmbed = new Discord.RichEmbed()
  .setTitle("User Information")
  .setColor("#e0d318")
  .setThumbnail(message.author.displayAvatarURL)
  .addField("Userame", message.member.displayName, true)
  .addField("Discrim", message.author.discriminator, true)
  .addField("ID", message.author.id, true)
  .addField("Bot", `${message.author.bot ? "Yes" : "No"}`, true)
  .addField("Role", `${role}`, true)
  .addField("Status",`${message.member.presence.status}`)
  .addField("Roles", `${message.member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
  .addField("Playing", `${message.member.presence.game ? `${message.member.presence.game.name}` : "Not playing anything."}`)
  .addField("Created At", `${moment.utc(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.author.createdAt, {long: true})})`)
  .addField("Joined At", `${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.member.joinedAt, {long: true})})`);

  message.channel.send(uEmbed);
}
});
   

client.on('message',async Epic => {
  var codes = "-";
  if(Epic.content.startsWith(codes + "voiceonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **ليس معي الصلاحيات الكافية**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
      },1000);
  });
  }
});

client.login(process.env.BOT_TOKEN)
