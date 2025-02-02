const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    react: "🎶",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please enter a query or a url!*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `📍 *YouTube Song Downloader* ✅
> 🦄 𝚔𝚎𝚕𝚞𝚖𝚡𝚣 𝚋𝚘𝚝 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍✨
°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
💡 Title - *${data.title}*
⏰ Ago - *${data.ago}*
👀 Disc - *${data.description}*


> *ＫＥＬＵＭＸＺ 🍃*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"*> *✅ By : Kelum S.viduranga*"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========video-dl===========

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    react: "📽️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please enter a query or a url!*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `📍 *YouTube Video Downloader* ✅
> 🦄 𝚔𝚎𝚕𝚞𝚖𝚡𝚣 𝚋𝚘𝚝 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍✨
°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
💡 Title - *${data.title}*
⏰ Ago - *${data.ago}*
👀 Disc - *${data.description}*


> *ＫＥＬＵＭＸＺ 🍃*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"*> *✅ By : Kelum S.viduranga*"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
