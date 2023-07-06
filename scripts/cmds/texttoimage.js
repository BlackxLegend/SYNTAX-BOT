const axios = require("axios");

module.exports = {
  config: {
    name: "imagine",
    aliases: ["dreamy", "scifi", "scify"],
    version: "1.0",
    author: "JARiF",
    countDown: 60,
    role: 0,
    shortDescription: {
      vi: "Tạo ảnh từ văn bản của bạn",
      en: "Create image from your text"
    },
    longDescription: {
      uid: "Tạo ảnh từ văn bản của bạn",
      en: "Create image from your text"
    },
    category: "Ai",
    guide: {
      vi: "",
      en:
        ""
    }
  },

  langs: {
    vi: {
      syntaxError: "⚠️ Vui lòng nhập prompt",
      error: "❗ Đã có lỗi xảy ra, vui lòng thử lại sau:\n%1",
      serverError: "❗ Server đang quá tải, vui lòng thử lại sau"
    },
    en: {
      syntaxError: "⚠️ Please enter prompt",
      error: "try again later ❗",
      serverError: "❗ Server is overloaded, please try again later"
    }
  },

  onStart: async function ({ message, args, getLang }) {
    const prompt = args.join(" ");
    if (!prompt)
      return message.reply(getLang("syntaxError"));

    message.reply("✅| Creating your Imagination...", (err, info) => { id = info.messageID });

    try {
      const { data: imageStream } = await axios({
        url: "https://goatbotserver.onrender.com/taoanhdep/texttoimage",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          prompt,
          styleId: 28,
          aspect_ratio: "1:1"
        },
        responseType: "stream"
      });

      imageStream.path = "image.jpg";

      return message.reply({
        attachment: imageStream
      });
    } catch (err) {
      return message.reply(getLang("error", err.response?.data?.message || err.message));
    }
  }
};
