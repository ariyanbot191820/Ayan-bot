module.exports = {
config: {
name: "ariyan",
version: "1.0",
author: "ariyan",
countDown: 5,
role: 0,
shortDescription: "no prefix",
longDescription: "no prefix",
category: "no prefix",
},

onStart: async function(){}, 
onChat: async function({ event, message, getLang }) {
if (event.body && event.body.toLowerCase() === "ariyan") {
return message.reply({
body: " ──────────◊\n‣ 𝐁𝐨𝐭 & 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧  \n\n‣ 𝐍𝐚𝐦𝐞: Ariyan                           ‣ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞:🕸️ SpideY 🕷️ 」",
attachment: await global.utils.getStreamFromURL("https://i.imgur.com/KV1u6yV.mp4")
});
}
}
}
