const fs = require('fs')
const chalk = require('chalk')
const {
   indonesia,
   english,
   spanyol
} = require(`./language`)

// Website Api (jgn di ganti tomlol)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

// Free apikey (Apikey expired silahkan login terus ganti V12 dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'V12', // 👉 login https://api.zeeoneofc.xyz to get apikey
}

// setting 
global.autoread = true // auto read message
global.autobio = false //auto ganti bio
global.anticall = true //anti call 
global.userRegister = false
global.autoblok212 = false //ubah jadi true biar nmr 212 di blok sama bot

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = english //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "BABLI-Md" //namabot kalian
global.ownername = "BABLI" //nama kalian
global.myweb = "https://movieshub3me.blogspot.com" //bebas asal jan hapus
global.youtube = "https://youtube.com/@saeedx302" //bebas asal jan hapus
global.myweb2 = "https://moviesmod.zip" //bebas
global.email = "ts.unc.ca.1.9@gmail.com" //bebas
global.region = "Pakistan" //bebas
global.timezone = 'Asia/Colombo' //  timezone wib
global.premium = ['923120443386'] //premium user
global.owner = ["923120443386", "923477008403"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "923120443386" // nomor wa kalian
global.ownernomerr = "+923120443386" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome = "https://i.ibb.co/DCxFL18/IMG-20240401-WA0791.png" // maks size 30kb, agar welcome image nya tdk delay
global.thumbGif = `https://i.ibb.co/DCxFL18/IMG-20240401-WA0791.png'
global.packname = '© BABLI-Md' //sticker wm ubah
global.author = 'SAEEDxNISAR' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.multiplier = 69
global.limitawal = {
   premium: "10000",
   free: 100
}

global.adventureRPG = 'https://sweezy-cursors.com/wp-content/uploads/cursor/dudu-bubu-playing-puzzles-animated/dudu-bubu-playing-puzzles-animated-custom-cursor.gif'
global.bankRPG = 'https://i.pinimg.com/736x/f8/71/63/f871637bbd3603d4112c4a5ef39af9b7.jpg'
global.bansosRPG = 'https://ih1.redbubble.net/image.5100371940.2179/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg'
global.bansosRPG_ = 'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839PA3861PT28D1048130024W7500H10000/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/bubu-eating-cream-panda-bear-bubu-and-dudu-couple-sticker.jpg'
global.berburuRPG = 'https://i.ibb.co/jr7pm7s/stream.jpg'
global.inventoryRPG = 'https://ih1.redbubble.net/image.5149879216.9784/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg'
global.cooldownRPG = 'https://i.ibb.co/brXvL4N/312610734-201475625680480-6377450030724337509-n.jpg'
global.dailyRPG = 'https://telegra.ph/file/17e857848a3afdb1c4fd8.jpg'
global.hourlyRPG = 'https://telegra.ph/file/bcabf71c0f56207d1629e.jpg'
global.kandangRPG = 'https://telegra.ph/file/89c3b3ec69d373da8f64b.jpg'
global.kolamRGP = 'https://telegra.ph/file/0bc07117c78b2c9674b7d.jpg'
global.mancingRPG = 'https://telegra.ph/file/1420d26b7f04f84993225.jpg'
global.monthlyRPG = 'https://telegra.ph/file/7eadf65b95d9f7a3ecb46.jpg'
global.weeklyRPG = 'https://telegra.ph/file/ffc85895d14db97931f0f.jpg'
global.rpg = {
   emoticon(string) {
      string = string.toLowerCase()
      let emot = {
         level: '📊',
         limit: '🎫',
         health: '❤️',
         exp: '✨',
         money: '💹',
         bank: '🏦',
         potion: '🥤',
         diamond: '💎',
         common: '📦',
         uncommon: '🛍️',
         mythic: '🎁',
         legendary: '🗃️',
         superior: '💼',
         pet: '🔖',
         trash: '🗑',
         armor: '🥼',
         sword: '⚔️',
         pickaxe: '⛏️',
         fishingrod: '🎣',
         wood: '🪵',
         rock: '🪨',
         string: '🕸️',
         horse: '🐴',
         cat: '🐻',
         dog: '🐶',
         fox: '🐼',
         petFood: '🍖',
         iron: '⛓️',
         gold: '🪙',
         emerald: '❇️',
         upgrader: '🧰'

      }
      let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
      if (!results.length) return ''
      else return emot[results[0][0]]
   }
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⭔'
global.mess = {
   sukses: '🤗Done, Oke Desu~',
   admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
   botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
   owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
   group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
   private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
   bot: 'Fitur Khusus Pengguna Nomor Bot',
   errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
   wait: '⏳ *Loding*',
   lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
   example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})
