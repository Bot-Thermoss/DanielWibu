exports.other = (id, XBOT, corohelp, tampilTanggal, tampilWaktu, instagram, aktif) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋
❉──────────❉

  *_OTHER_ MENU*
  
╭──❉ *OTHERS* ❉──
│1. *#tts* <teks> (error)
│2. *#quotes / #quotes1*
│3. *#bitly* <link>
│4. *#foto cewek*
│5. *#foto cowok*
│6. *#pokemon*
│7. *#loli*
│8. *#waifu*
│9. *#fotoanime*
│10. *#namaninja* <nama lu>
│11. *#alay*  <teks>
│12. *#spamcall* <nomer> (error)
│13. *#spamsms* <nomer> (error)
│14. *#bucin*
│15. *#infoanime*
│16. *#filmanime*
│17. *#gay*
╰───────────

╔[ *TANGGAL HARI INI🗓️* ]
╚➣ _*${tampilTanggal}*_
╔[ *SEKARANG JAM🕒* ]
╚➣ _*${tampilWaktu}*_
╔[ *BOT AKTIF🤖* ]
╚➣ _*${aktif}*_
`
}