const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
        if(member.guild.id === "514339334644695060") { 
setTimeout(function(){
  const channel = member.guild.channels.find('id', '514808324571529346'); 
if (!channel) return;
  channel.send(`**Welcome To __ # - Versé Server :rose: :heart: __ ** `) 
}, 6000); 
}});
   
client.login(process.env.BOT_TOKEN);
