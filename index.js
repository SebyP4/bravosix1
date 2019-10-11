const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.login('NjMyMjY3NjUyNjk3Njg2MDI2.XaC9MQ.tR8-I4moq_14-s6E8h82aK1PBiI')