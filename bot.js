const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} sunucuya giriş yaptı ve AKTİF!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm selam Muz! Hoşgeldin.');
  }
  if (msg.content.toLowerCase() === 'afk') {
    msg.reply('Görüşürüz Muz!');
  }
  if (msg.content.toLowerCase() === '!!youtube') {
    msg.reply('https://www.youtube.com/channel/UCz3b9THTMARYmreFlPS4Oug');
  }
});

client.login('NTQ2MzUyOTcwOTU1MDk2MDY0.D0m-sg.DaOmUAw0jWgc8eX4n3gLJUCknmY');
