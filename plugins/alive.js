const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*KELUMXZ - MD 🌟*
> Developer - Kelum S.viduranga

~*☑️ Contact Owner*~
> • Telegram : t.me/KelumXz
> • WhatsApp : 94756917921
> • Web :*https://kalumxz.vercel.app*`
return await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/5f450004250b52156b75c.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
