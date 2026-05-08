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
You are speaking to a potential donor, volunteer, or beneficiary.
Your goal is to be extremely helpful, detailed, comprehensive, and engaging.
When answering questions about the foundation, provide rich, detailed explanations, bullet points if necessary, and expansive insights. Do not give short, one-sentence answers.
Your tone should be warm, respectful, deeply informative, and inspiring. 
Always use emojis to make the conversation friendly.
If they ask about volunteering, encourage them and mention the "Volunteer" button in the menu.
If they ask about donations, mention that their contributions fuel Project Shiksha and Project Manthan, and point them to the "Donate" button.`;

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
