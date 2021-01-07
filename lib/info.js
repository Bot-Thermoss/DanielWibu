exports.info = (id, Termos BOT, corohelp, tampilTanggal, tampilWaktu, instagram, aktif) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋
❉──────────❉

  *_INFORMATION_ MENU*
  
╭──❉ *INFORMATION* ❉──
│1. *#sholat* <daerah>
│2. *#covid*
│3. *#infogempa* 
│4. *#harinasional* <tanggal>
╰───────────

╔[ *TANGGAL HARI INI🗓️* ]
╚➣ _*${tampilTanggal}*_
╔[ *SEKARANG JAM🕒* ]
╚➣ _*${tampilWaktu}*_
╔[ *BOT AKTIF🤖* ]
╚➣ _*${aktif}*_
`
}