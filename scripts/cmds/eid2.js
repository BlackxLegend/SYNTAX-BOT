module.exports = {
  config: {
    name: "eid2",
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
      `Time remaining until ❤ 𝙀𝙞𝙙-𝙐𝙡-𝘼𝙙𝙝𝙖 🥰\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds «\n💗 𝙴𝚒𝚍 𝚏𝚎𝚜𝚝𝚒𝚟𝚊𝚕𝚜 𝚊𝚛𝚎 𝚍𝚎𝚏𝚒𝚗𝚒𝚝𝚎𝚕𝚢 𝚍𝚎𝚙𝚎𝚗𝚍𝚎𝚗𝚝 𝚘𝚗 𝚖𝚘𝚘𝚗 𝚜𝚒𝚐𝚑𝚝𝚒𝚗𝚐\n*•.¸♡ On the joyful day of Eid-ul-Adha, may Allah fill your life with happiness, peace, and prosperity. May Allah fill your heart with love, your soul with spirituality, and your mind with wisdom. Advance Eid Mubarak! "May God give you happiness of heaven above ♡¸.•*\n\n𝗖𝗼𝗱𝗲 𝗕𝘆:\n≼≽ＦＡＴＩＮ ＲＡＨＭＡＮ≽`,
      event.threadID,
      event.messageID
    );
  }
};
