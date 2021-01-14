const mineflayer = require('mineflayer');
var disc = require('discord.js');
var client = new disc.Client();
var delay = require('delay');
var config = require(`./config.json`);
var chalk = require('chalk');

var prefix = config.prefix;
let color = `#RANDOM`;
var host = config.ip;
var port = config.port;
var username = config.username;
var version = config.version;
var discordid = config.discordid;
var channelid = config.channelid;


const bot = mineflayer.createBot({
    host: host,
    port: port,
    username: username,
    version: version
});



client.on('ready',activity=>{
    client.user.setStatus(`online`);
    client.user.setActivity(
        `${ip} Servers Chat. | For Help Do ${prefix}help|`,
        {type: "WATCHING"}
    )
});
bot.on('windowOpen', () => { // slot button mode cb
    console.log(`Bot dang nhap password`)
    bot.clickWindow(1,0,0)
    delay()
    bot.clickWindow(1,0,0)
    bot.clickWindow(1,0,0)
    bot.clickWindow(1,0,0)
});

client.on('ready',async =>{
    console.log(chalk.red('----------------------------------'))
    console.log(chalk.magenta(`Discord bot is on. Loggined as ${client.user.tag}`))
    console.log(chalk.red('----------------------------------'))

})

// client.on("message",async message =>{
//     if(message.channel.id == )
// })
bot.on('login',async () =>{
    console.log(chalk.red('----------------------------------'))
    console.log(chalk.magenta(`Bot ${bot.username} is on`))
    console.log(chalk.red('----------------------------------'))

});

client.login(discordid)
.catch(error =>{
    console.log("Can't Login")
});
bot.on("message", message =>{
    let channel = client.channels.cache.get(channelid)
    if(!channel) return;
    const mes = new disc.MessageEmbed()
        .setDescription(`${message}`)
        .setColor(color)
    channel.send(mes);
} )


client.on('message', msg =>{
    if(!msg.content.startsWith(prefix)) return;
    let args = msg.content.split(" ").slice(1);
    args = msg.content.slice(prefix.length).split(/ +/);
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    command = args.shift().toLowerCase();
    if(command == "chat")
    {
        const chat = args.join(" ")
        bot.chat(chat);
        const success = new disc.MessageEmbed()
            .setDescription(`:white_check_mark: ${msg.author.tag} sent \`${chat}\``)
            .setColor(color)
        msg.channel.send(success);
    }
    else if(command == "forward")
    {
        bot.setControlState('forward', true)
        const MoForw = new disc.MessageEmbed()
            .setDescription(`:white_check_mark: Im Moving forward To Stop Do .stop`)
            .setColor(color)
        msg.channel.send(MoForw)
  }else if (command  == "backward") {
    bot.setControlState('back', true)
    const MoBackw = new disc.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving backward To Stop Do .stop`)
        .setColor(color)
    msg.channel.send(MoBackw)
  }else if (command  == "stop") {
    bot.clearControlStates()
    const MoStop = new disc.MessageEmbed()
        .setDescription(`:white_check_mark: Stopped!`)
        .setColor(color)
    msg.channel.send(MoStop)
  }else if (command  == "left") {
    bot.setControlState('left', true)
    const MoLeft = new disc.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving left To Stop Do .stop`)
        .setColor(color)
    msg.channel.send(MoLeft)
  }else if (command  == "right") {
    bot.setControlState('right', true)
    const MoRight = new disc.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving Right To Stop Do .stop`)
        .setColor(color)
    msg.channel.send(MoRight)
  }
  else if(command =="gamemode0")
    {
        bot.gamemode(0)
        const mode = new disc.MessageEmbed()
            .setDescription(`:white_check_mark: Just test`)
            .setColor(color)
         msg.channel.send(mode)

    }
  
})


function GetUsernameFromMessage(mes)
{
    var i1,i2;
    usname = "";
    for(i = 0; i < mes.length;i ++)
    {
        if(mes[i] == "]")
        {
            i1 = i;
            for(a = i; a< mes.length;a++)
            {
                if(mes[a] == ":")
                i2 = a;
                break;
            }
            break;
        }
    }
    for(i = i1; i<= i2; i++)
    {
        usname = usname + mes[i];
    }
    return usname;

}
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