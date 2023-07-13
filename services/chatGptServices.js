const { Configuration, OpenAIApi } = require('openai');

async function GetMessageChatGPT(text) {
    const config = new Configuration({ apiKey: "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" });

    const openai = new OpenAIApi(config);
     
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
    });

    if (response.status == 200 && response.data.choices.length > 0) {
        return response.data.choices[0].text;
    }
  
} 

module.exports = {
    GetMessageChatGPT
};
