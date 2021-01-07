exports.media = (id, Termos BOT, corohelp, tampilTanggal, tampilWaktu, instagram, aktif) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋
❉──────────❉

   *_MEDIA_ MENU*
   
╭──❉ *MEDIA* ❉──
│1. *#ytmp3* <linkyoutube>
│2. *#ytmp4* <linkyoutube>
│3. *#tiktok* <linktiktok>
│4. *#ig* <linkIg>
│5. *#fb* <linkFb>
│6. *#twt* <linkTweet>
│7. *#infoig* <@username>
╰───────────

╔[ *TANGGAL HARI INI🗓️* ]
╚➣ _*${tampilTanggal}*_
╔[ *SEKARANG JAM🕒* ]
╚➣ _*${tampilWaktu}*_
╔[ *BOT AKTIF🤖* ]
╚➣ _*${aktif}*_
`
}