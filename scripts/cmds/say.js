const axios = require('axios');

module.exports = {
	config: {
		name: "say",
		aliases: ["say"],
		version: "1.0",
		author: "JARiF",
		countDown: 5,
		role: 0,
		shortDescription: "text to speech",
		longDescription: "",
		category: "utility",
		guide: "{pn} en,ar,vi {<nigga>}"
	},

	onStart: async function ({ api, message, args, event}) {
    let lng = "vi"
    let say;
		if(ln.includes(args[0])){
      lng = args[0]
      args.shift()
      say = encodeURIComponent(args.join(" "))
    } else{ say = args.join(" ")}
			try {
				let url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lng}&client=tw-ob&q=${say}`


        message.reply({body:"",
				attachment: await global.utils.getStreamFromURL(url)
                      })
				
					
			} catch (e) {
        console.log(e)
        message.reply(`🥺 server busy `) }

	}
};