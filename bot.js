const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = '$';

const adminprefix = "$";

const admin = "$";

const developers = ["316324088865882142",""]

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(admin + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`** :heart:  ${argresult}**`)
  }  else  
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`** :heart:  ${argresult}**`)
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`** :heart:  ${argresult}**`)
  } else 
  if (message.content.startsWith(admin + 'stream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`** :heart:  **`)
  }
  if (message.content.startsWith(admin + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(admin + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});  


client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Ksa"));
    });


client.on('message', message => {
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("** {prefix} bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
    


client.on('message', message => {

    if(message.content === prefix + "mc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "unmc") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
      
    
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
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});









 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 5 **")
      message.author.sendEmbed(Embed11)
    }
}); 





client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted')); 
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك ${member}  ")
      .addField(`by`,`By : End !`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
    
        
    }
    }
})



client.on('message', message => {
    if (!message.channel.guild) return;
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("***  ليس معك صلاحيات  ***")
    var prefix = "$";
       if (message.content ===   prefix + "add role") {
    message.channel.send("<@" + message.author.id + ">  ***  جاري اعطاء الرتبة للاعضاء كما امرت  *** ")
    message.guild.members.forEach(m => {
    m.addRole(message.guild.roles.find('name', 'Ksa'))
    })
    }
    
       if (message.content ===   prefix + "remove role") {
    message.channel.send("<@" + message.author.id + ">  ***  جاري اعطاء الرتبة للاعضاء كما امرت  *** ")
    message.guild.members.forEach(m => {
    m.removeRole(message.guild.roles.find('name', 'Ksa'))
    })
    }
    
    });





client.login(process.env.BOT_TOKEN);
