const Discord = require('discord.js');
const { prefix , token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => { 
    console.log('Ready!')
})

client.on('message', message => {
    //console.log(message.content);

    if(message.content.startsWith(`${prefix}Spin`)) {
        message.channel.send("Wheel")
    }
})
        //message.channel.send("Wheel")

client.on('message', message => {
    //console.log(message.content);

    if(message.content.startsWith(`${prefix}Advice`)) {
            message.channel.send("You should spin the wheel")
        }
    })
            //message.channel.send("You should spin the wheel")

            client.on('message', message => {
                //console.log(message.content);
            
                if(message.content.startsWith(`${prefix}Gamble`)) {
                        message.channel.send("Rock, Paper, Scissors. If you win, you get 20 coins. If I win I get to change your aesthetic to whatever I choose.")
                    }
                })
                        //message.channel.send(""Rock, Paper, Scissors. If you win, you get 20 coins. If I win I get to change your aesthetic to whatever I choose.")

            client.login(token);

 client.login(token);
client.on('message', message => {
    //console.log(message.content);
                        
                if(message.content.startsWith(`${prefix}Logan`)) {
                         message.channel.send("SMH")
                    }
                })
                        //message.channel.send("SMH")
                        
                        client.login(token);

                        client.login(token);
                        client.on('message', message => {
                            //console.log(message.content);
                                                
                                        if(message.content.startsWith(`${prefix}Question`)) {
                                                 message.channel.send("Do you want to spin the wheel?")
                                            }
                                        })
                                                //message.channel.send("Do you want to spin the wheel?")
                                                
                                                client.login(token);

                                                client.login(token);
client.on('message', message => {
    //console.log(message.content);
                        
                if(message.content.startsWith(`${prefix}Sal`)) {
                         message.channel.send("I love Logan's Aesthetics")
                     }
                })
                        //message.channel.send("I love Logan's Aesthetics")

                        client.on('message', message => {
                            //console.log(message.content);
                        
                            if(message.content.startsWith(`${prefix}Hi`)) {
                                message.channel.send("Bye")
                            }
                        })
                                //message.channel.send("Wheel")

client.login(token);   
