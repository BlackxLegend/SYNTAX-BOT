const fs = require("fs");
const axios = require("axios");

module.exports = {
  config: {
    name: "gimg",
    aliases: ["groupimg"],
    version: "1.0",
    author: "JARiF",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "box chat",
    guide: ""
  },

  onStart: async function({ api, event }) {
    if (event.type !== "message_reply") {
      return api.sendMessage("❌ You have to reply to a photo", event.threadID, event.messageID);
    }
    if (!event.messageReply.attachments || event.messageReply.attachments.length === 0) {
      return api.sendMessage("❌ You have to reply to a photo", event.threadID, event.messageID);
    }
    if (event.messageReply.attachments.length > 1) {
      return api.sendMessage("Please reply with only 1 photo!", event.threadID, event.messageID);
    }

    const abc = event.messageReply.attachments[0].url;
    const pathImg = __dirname + '/cache/loz.png';
    try {
      const response = await axios.get(abc, { responseType: 'arraybuffer' });
      fs.writeFileSync(pathImg, Buffer.from(response.data, 'utf-8'));
      api.changeGroupImage(fs.createReadStream(pathImg), event.threadID, () => {
        fs.unlinkSync(pathImg);
      }, event.messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage("❌ Failed to change the group image", event.threadID, event.messageID);
    }
  }
};
