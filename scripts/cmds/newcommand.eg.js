/**
 * @ভিয়েতনামী
 * প্রথমে আপনার জাভাস্ক্রিপ্ট সম্পর্কে জ্ঞান থাকতে হবে যেমন ভেরিয়েবল, ফাংশন, লুপ, অ্যারে, অবজেক্ট, প্রতিশ্রুতি, async/await,... আপনি এখানে আরও জানতে পারেন: https://developer.mozilla.org/ en-US/docs /Web/JavaScript বা এখানে: https://www.w3schools.com/js/
 * Nodej-এর জ্ঞান অনুসরণ করুন যেমন need, module.exports, ... আপনি এখানে আরও জানতে পারেন: https://nodejs.org/en/docs/
 * এবং অনানুষ্ঠানিক ফেসবুক এপিআই সম্পর্কে জ্ঞান যেমন api.sendMessage, api.changeNickname,... 
 * যদি ফাইলের নামটি `.eg.js` দিয়ে শেষ হয়, তবে এটি বটে লোড হবে না, আপনি যদি এটি বটে লোড করতে চান, তাহলে ফাইলের এক্সটেনশনটিকে `.js` এ পরিবর্তন করুন
 */

/**
 * @English
 * First you need to have knowledge of javascript such as variables, functions, loops, arrays, objects, promise, async/await, ... you can learn more at here: https://developer.mozilla.org/en-US/docs/Web/JavaScript or here: https://www.w3schools.com/js/
 * Next is knowledge of Nodejs such as require, module.exports, ... you can learn more at here: https://nodejs.org/en/docs/
 * And knowledge of unofficial facebook api such as api.sendMessage, api.changeNickname,... 
 * If the file name ends with `.eg.js` then it will not be loaded into the bot, if you want to load it into the bot then change the extension of the file to `.js`
 */

module.exports = {
	config: {
		name: "commandName", // Name of command, it must be unique to identify with other commands
		version: "1.0", // Version of command
		author: "SYNTAX TEAM", // Author of command
		countDown: 5, // Time to wait before executing command again (seconds)
		role: 0, // Role of user to use this command (0: normal user, 1: admin box chat, 2: owner bot)
		shortDescription: {
			vi: "đây là mô tả ngắn của lệnh",
			en: "this is short description of command"
		}, // Short description of command
		longDescription: {
			vi: "đây là mô tả dài của lệnh",
			en: "this is long description of command"
		}, // Long description of command
		category: "categoryName", // Category of command
		guide: {
			vi: "đây là hướng dẫn sử dụng của lệnh",
			en: "this is guide of command"
		} // Guide of command
	},

	langs: {
		vi: {
			hello: "হ্যালো",
			helloWithName: "হাই, আপনার ফেসবুক আইডি হল %1"
		}, // Vietnamese language
		en: {
			hello: "hello world",
			helloWithName: "hello, your facebook id is %1"
		} // English language
	},

	// onStart is a function that will be executed when the command is executed
	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
		// YOUR CODE HERE, use console.log() to see all properties in variables above


		// getLang is a function to get language of command

		// getLang without parameter is a function to get language of command without parameter
		message.reply(getLang("hello"));
		// getLang with parameter is a function to get language of command with parameter (delete // in line below to test)
		// message.reply(getLang("hello", event.senderID));

	}
};
