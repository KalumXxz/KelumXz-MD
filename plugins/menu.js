const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "👀",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*KELUMXZ - MD 🌟*
> Developer - Kelum S.viduranga

~*☑️ Contact Owner*~
> • Telegram : t.me/KelumXz
> • WhatsApp : 94756917921
> • Web :*https://kalumxz.vercel.app*

*┏━━━〔 ᴋᴇʟᴜᴍ-ᴍᴅ 〕━━━━ •*
*╏* ❕Very Simple User bot
*┗━━━━━━━━━━━━━━━━━ •*

*┌───═━• ᴋᴇʟᴜᴍxᴢ ᴍᴅ •━═───┐*
*╏🏮.song*
*╏🪄.video*
*╏🏮.fb*
*╏🪄.tt*
*╏🏮.mediafire*
*╏🪄.twitter*
*╏🏮.gdrive*
*╏🪄.ai*
*╏🏮.restart*
*╏🪄.promote*
*╏🏮.demote*
*╏🪄.remove*
*╏🏮.setpic*
*╏🪄.add*
*╏🏮.setwelcome*
*╏🪄.setgoodbye*
*╏🏮.menu*
*╏🪄.alive*
*╏🏮.ping*
*╏🪄.repo*
*╏🏮.owner*
*╏🪄.img2url*
*╏🏮.tourl*
*╏🪄.kelum*
*╰─────────────────◎*`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/1b18a9d5c6e02a9b1faa3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
