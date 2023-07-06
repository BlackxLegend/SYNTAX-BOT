/**
 * @Bangla
 * প্রথমে আপনার জাভাস্ক্রিপ্ট সম্পর্কে জ্ঞান থাকতে হবে যেমন ভেরিয়েবল, ফাংশন, লুপ, অ্যারে, অবজেক্ট, প্রতিশ্রুতি, async/await,... আপনি এখানে আরও জানতে পারেন: https://developer.mozilla.org/ en-US/docs /Web/JavaScript বা এখানে: https://www.w3schools.com/js/
 * Nodej-এর জ্ঞান অনুসরণ করুন যেমন need, module.exports, ... আপনি এখানে আরও জানতে পারেন: https://nodejs.org/en/docs/
 * এবং অনানুষ্ঠানিক ফেসবুক এপিআই সম্পর্কে জ্ঞান যেমন api.sendMessage, api.changeNickname,...
 * যদি ফাইলের নামটি `.eg.js` দিয়ে শেষ হয়, তবে এটি বটে লোড হবে না, আপনি যদি এটি বটে লোড করতে চান, তাহলে ফাইলের এক্সটেনশনটিকে `.js` এ পরিবর্তন করুন
 */

/**
 * @English
 * First you need to have knowledge of javascript such as variables, functions, loops, arrays, objects, promise, async/await, ... you can learn more at here: https://developer.mozilla.org/en-US/docs/Web/JavaScript or here: https://www.w3schools.com/js/
 * Next is knowledge of Nodejs such as require, module.exports, ... you can learn more at here: https://nodejs.org/en/docs/
 * And knowledge of unofficial facebook api such as api.sendMessage, api.changeNickname,... you can learn more at here: 
 * If the file name ends with `.eg.js` then it will not be loaded into the bot, if you want to load it into the bot then change the file extension to `.js`
 */

module.exports = {
	config: {
		name: "commandName", // Name of command, it must be unique to identify with other commands
		version: "1.0", // Version of command
		author: "SYNTAX TEAM", // Author of command
		category: "events" // Category of command, it must be "events" to identify with other commands
	},

	langs: {
		bn: {
			hello: "হ্যালো নতুন সদস্য",
			helloWithName: "হ্যালো নতুন সদস্য, আপনার ফেসবুক আইডি হল %1"
		}, // Bangla language
		en: {
			hello: "hello new member",
			helloWithName: "hello new member, your facebook id is %1"
		} // English language
	},

	
	onStart: async function ({ api, usersData, threadsData, message, event, userModel, threadModel, prefix, dashBoardModel, globalModel, dashBoardData, globalData, envCommands, envEvents, envGlobal, role, getLang , commandName }) {
		// YOUR CODE HERE, use console.log() to see all properties in variables above

		// example when user join group

		// check if event is user join group, see more at 
		if (event.logMessageType == "log:subscribe") { 
			// getLang is a function to get language of command

			// getLang without parameter is a function to get language of command without parameter
			message.send(getLang("hello"));

			// getLang with parameter is a function to get language of command with parameter (delete // in line below to test)
			// message.send(getLang("helloWithName", event.logMessageData.addedParticipants[0].fullName));
		}
	}
};
