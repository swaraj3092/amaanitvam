const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenAI } = require('@google/genai');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize GoogleGenAI if key is present
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

const systemInstruction = `You are Amaani, the AI chatbot for the Amaanitvam Foundation, an NGO. 
You are friendly, empathetic, and helpful.
You have knowledge about the following:
1. About Foundation: We are an NGO dedicated to social upliftment.
2. Shiksha: Our education project for underprivileged children.
3. Manthan: Our youth transformation and leadership initiative.
4. Volunteering: People can volunteer by clicking the 'Volunteer' button on the website.
5. Donations: We accept donations to support our causes.
Keep your answers concise, informative, and formatted with emojis.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { history, message } = req.body;
    
    if (!ai) {
        console.warn("GEMINI_API_KEY is not set. Sending a mock response.");
        return setTimeout(() => {
            res.json({ reply: "Namaste 🙏! (API Key missing. This is a mock response). I'm Amaani. We run the Shiksha project for education and Manthan for youth leadership!" });
        }, 1500);
    }

    let prompt = `${systemInstruction}\n\n`;
    if (history && history.length > 0) {
       history.forEach(msg => {
          prompt += `${msg.role === 'user' ? 'User' : 'Amaani'}: ${msg.content}\n`;
       });
    }
    prompt += `User: ${message}\nAmaani: `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process chat message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
