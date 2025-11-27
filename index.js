require("dotenv").config(); // doit être tout en haut

const { Client, GatewayIntentBits } = require("discord.js");

console.log("Fichier index.js lancé !");
console.log("Token chargé :", process.env.DISCORD_TOKEN ? "OK" : "AUCUN TOKEN");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);