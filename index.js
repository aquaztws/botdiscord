const Discord = require("discord.js")
const client = new Discord.Client()
let prefix = "."

client.login("NjgxNjIwNjQ5Mzk0ODMxNDEw.XlUVDQ.kDRZVrSwoGp8o5FdiuEEJ1gjhWM") 


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

async function getReadyForBed() {
    let teethPromise = brushTeeth();
    let tempPromise = getRoomTemperature();
  
    // Change clothes based on room temperature
    let temp = await tempPromise;
    // Assume `changeClothes` also returns a Promise
    if(temp > 20) {
      await changeClothes("warm");
    } else {
      await changeClothes("cold");
    }
  
    await teethPromise;
  }
