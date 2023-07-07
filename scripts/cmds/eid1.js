module.exports = {
  config: {
    name: "eid1",
    version: "1.0",
    author: "JARiF",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: ""
    },
    longDescription: {
      vi: "",
      en: ""
    },
    category: "islam",
    guide: {
      vi: "",
      en: ""
    }
  },

  langs: {
    vi: {
      error: ""
    },
    en: {
      error: ""
    }
  },

  onStart: async ({ api, event }) => {
    const u = Date.parse("June 28, 2023 10:00:00") - Date.parse(new Date());
    const seconds = Math.floor((u / 1000) % 60);
    const minutes = Math.floor((u / 1000 / 60) % 60);
    const hours = Math.floor((u / (1000 * 60 * 60)) % 24);
    const days = Math.floor(u / (1000 * 60 * 60 * 24));

    return api.sendMessage(
      `Time remaining until ❤ 𝙀𝙞𝙙-𝙐𝙡-𝙁𝙞𝙩𝙧 🥰\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds«\n💗𝚁𝚊𝚖𝚊𝚍𝚊𝚗 𝚊𝚗𝚍 𝙴𝚒𝚍 𝚏𝚎𝚜𝚝𝚒𝚟𝚊𝚕𝚜 𝚊𝚛𝚎 𝚍𝚎𝚏𝚒𝚗𝚒𝚝𝚎𝚕𝚢 𝚍𝚎𝚙𝚎𝚗𝚍𝚎𝚗𝚝 𝚘𝚗 𝚖𝚘𝚘𝚗 𝚜𝚒𝚐𝚑𝚝𝚒𝚗𝚐\n*•.¸♡ Happy an amazing Eid, filled with joy and prosperity. Wishing you a pleasant and happy Eid. May Allah fulfil all your dreams on this special day!. With divine joy in my heart and a big smile on my face, I am sending you Advance Eid-ul-Fitr wishes. ♡¸.•*\n\n𝗖𝗼𝗱𝗲 𝗕𝘆:\n≼≽ＦＡＴＩＮ ＲＡＨＭＡＮ≼≽`,
      event.threadID,
      event.messageID
    );
  }
};
