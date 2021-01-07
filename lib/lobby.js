exports.lobby = (id, Termos BOT, corohelp, tampilTanggal, tampilWaktu, instagram, aktif) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋
❉──────────❉

 *${Termos BOT}*
 
╭──❉ *SERING DI PAKAI* ❉──
│1. *#sticker*
╰───────────
╭──❉  *daftar memu*  ❉────
│1. *#media* 
│2. *#edukasi*
│3. *#informasi*
│4. *#other*
│5. *#changelog*
│6. *#ownerinfo*
╰────────────

╔[ *TANGGAL HARI INI🗓️* ]
╚➣ _*${tampilTanggal}*_
╔[ *SEKARANG JAM🕒* ]
╚➣ _*${tampilWaktu}*_
╔[ *BOT AKTIF🤖* ]
╚➣ _*${aktif}*_
`
}