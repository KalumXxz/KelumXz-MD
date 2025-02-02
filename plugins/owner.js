const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
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
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/c6c986c3df88b830c8c2a.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
