const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📌",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `☑️
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/749e71c525eef11db71e2.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
