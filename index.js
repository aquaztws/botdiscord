const Discord = require("discord.js")
const client = new Discord.Client()
let prefix = "."

client.login("NjgxNjIwNjQ5Mzk0ODMxNDEw.XlUTvw.bqBuH2g3CsXW3-JIqB9bvHdEdXw") 


//client connect


client.on("ready", () => {
    console.log("I'm ready");
});





//boualam

client.on("message", (message) => {
    if(message.content === "Yosh") {
        message.channel.send("Yosh m8")
}})

client.on("message", (message) => {
    if(message.content === "yosh") {
        message.channel.send("Yosh m8")
}})