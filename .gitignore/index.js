const Discord = require ('discord.js');
const bot = new Discord.Client()

bot.on('ready', function (){
    bot.user.setGame('Modérer AgraniaRP').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
    return channel.send('__**Bonjour à toi je te présente un serveur Garrys Mod !**__ Si tu as des questions ou que tu veux rejoindre le serveur je tu peux premièrement rejoindre ce serveur discord ! En plus viens il manque plus que toi ! Ton ticket : https://discord.gg/VJnY5c4 ' )
    }).catch(console.error)
})


bot.login('NTk5NTQxMjYzMjgwMjQyNzA4.XSmtSg.Vnq_wtCDNAseri9rdz6iArpzi5A')
