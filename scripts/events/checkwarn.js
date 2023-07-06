module.exports = {
	config: {
		name: "checkwarn",
		version: "1.3",
		author: "SYNTAX TEAM",
		category: "events"
	},

	langs: {
		vi: {
			warn: "ব্যবহারকারী %1কে আগে ৩ বার সতর্ক করা হয়েছে এবং চ্যাট বক্স থেকে নিষিদ্ধ করা হয়েছে\n- নাম: %1\n- Uid: %2\n- নিষেধাজ্ঞা মুক্ত করতে অনুগ্রহ করে \"%3warn unban < uid>\" কমান্ডটি ব্যবহার করুন (যেখানে uid হল সেই ব্যক্তির uid যাকে আপনি সরাতে চান)",
			needPermission: "নিষিদ্ধ সদস্যদের কিক করার জন্য বটের অ্যাডমিন অধিকার প্রয়োজন"
		},
		en: {
			warn: "Member %1 has been warned 3 times before and has been banned from the chat box\n- Name: %1\n- Uid: %2\n- To unban, please use the \"%3warn unban <uid>\" command (with uid is the uid of the person you want to unban)",
			needPermission: "Bot needs administrator permission to kick banned members"
		}
	},

	onStart: async ({ threadsData, message, event, api, client, getLang }) => {
		if (event.logMessageType == "log:subscribe")
			return async function () {
				const { threadID } = event;
				const { data } = await threadsData.get(event.threadID);
				const { warn: warnList } = data;
				if (!warnList)
					return;
				const { addedParticipants } = event.logMessageData;
				for (const user of addedParticipants) {
					const findUser = warnList.find(user => user.userID == user.userID);
					if (findUser && findUser.list >= 3) {
						const userName = user.fullName;
						const uid = user.userFbId;
						message.send({
							body: getLang("warn", userName, uid, client.getPrefix(threadID)),
							mentions: [{
								tag: userName,
								id: uid
							}]
						}, function () {
							api.removeUserFromGroup(uid, threadID, (err) => {
								if (err)
									return message.send(getLang("needPermission"));
							});
						});
					}
				}
			};
	}
};
