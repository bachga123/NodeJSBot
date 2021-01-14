const mineflayer = require('mineflayer');
var disc = require('discord.js');
var client = new disc.Client();
var delay = require('delay');



var host = '2y2c.ord';
var port = 25565;
var username = 'Test_Bot';
var version = '1.12.2';
var discordid = 'Nzk4OTcwMjkxODcwNjI5OTg5.X_8xEQ.XP7lZza8HlrBh-GBgsi0qWsmv5c';
var channelid = '799139376100540427';


const bot = mineflayer.createBot({
    host: host,
    port: port,
    username: username,
    version: version
});

bot.on('windowOpen', () => { // slot button mode cb
    console.log(`Bot dang nhap password`)
    bot.clickWindow(1,0,0)
    bot.clickWindow(1,0,0)
    bot.clickWindow(1,0,0)
    bot.clickWindow(1,0,0)
});

client.on('ready',async =>{
    console.log(`Discord bot is on. Loggined as ${client.user.tag}`)
})

// client.on("message",async message =>{
//     if(message.channel.id == )
// })
bot.on('login',async () =>{
    console.log('bot is on')
});

client.login(discordid)
.catch(error =>{
    console.log("Can't Login")
});
bot.on("message", message =>{
    let channel = client.channels.cache.get(channelid)
    if(!channel) return;
    channel.send(`[2y2c]: ${message}`)
} )

// if(message.mentions.has(client.user, { ignoreDirect: true, ignoreRoles: true, ignoreEveryone: true })) {

//     const embed = new Discord.MessageEmbed()
//                             .setColor(color)
//                             .setTitle('[Bot Message]')
//                             .setDescription(`Prefix mặc định của bot là **${prefix}**`)
//                             .setFooter(footer)
//                             .setTimestamp();

//     message.channel.send(embed).then(message => {
//         message.delete({ timeout: 10000 });
//     });
// }