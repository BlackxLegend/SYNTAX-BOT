const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: 'gfx2',
    version: '1.0',
    author: 'JARiF | Api By Samir Thakuri',
    countDown: 10,
    role: 0,
    shortDescription: 'Create gfx logo',
    longDescription: '',
    category: 'edit',
    guide: {
      en: '{p}{n}  Text',
    },
  },

  onStart: async function ({ message, args, event, api }) {
    const { senderID, threadID, messageID } = event;
    const filePath = path.join(__dirname, `cache/${event.threadID}_${event.senderID}.png`);
    const text = args.join(' ');

    if (!text) {
      return api.sendMessage(`Wrong format.\nUse: ${this.config.name} text`, threadID, messageID);
    }

    try {
      const response = await axios.get(`https://tanjiro-api.onrender.com/gfx3?name=${text}&api_key=tanjiro`, {
        responseType: 'arraybuffer',
      });

      fs.writeFileSync(filePath, Buffer.from(response.data, 'utf-8'));

      api.sendMessage(
        { attachment: fs.createReadStream(filePath) },
        threadID,
        () => fs.unlinkSync(filePath),
        messageID
      );
    } catch (error) {
      console.error('Error:', error);
      api.sendMessage('An error occurred while processing the request.', threadID, messageID);
    }
  },
};
