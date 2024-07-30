//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: mirai.art" //ur yt chanel name
global.socialm = "GitHub: Zeus30007" //ur github or insta name
global.location = "Australia, Sydney, newtown" //ur location

//new
global.botname = '㊗𝙎𝙝𝙞𝙣𝙞𝙘𝙝𝙞𝙧𝙤' //ur bot name
global.ownernumber = '255626967587' //ur owner number
global.ownername = '㊗⨺⃝𝙼𝙸𝚁𝙰𝙽 𝙵𝙾𝚇𓃦' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = ""
global.themeemoji = '⛩️'
global.wm = "𝙈𝙄𝙆𝙀𝙔㊗𝙎𝙝𝙞𝙣𝙞𝙘𝙝𝙞𝙧𝙤."
global.botscript = 'https://github.com/' //script link
global.packname = "Hail ⨺⃝𝙼𝙸𝚁𝙰𝙽 𝙵𝙾𝚇𓃦"
global.author = "the supreme force."
global.creator = "255626967587"
global.xprefix = '!'
global.premium = ["255626967587"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v2' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
