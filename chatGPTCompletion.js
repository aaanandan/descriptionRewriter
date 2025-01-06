const axios = require("axios");

// Replace with your OpenAI API key
const API_KEY = "";

// Function to rewrite text using ChatGPT API
async function rewriteText(description) {
  const endpoint = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await axios.post(
      endpoint,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a professional content writer. Rewrite the given text to be more descriptive, error-free, and include greetings and filler messages.",
          },
          {
            role: "user",
            content: description,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    // Extract and print the rewritten text
    const rewrittenText = response.data.choices[0].message.content;
    console.log("Rewritten Text:", rewrittenText);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
}

// Example usage
const originalText = "Meeting is scheduled for tomorrow. Please join on time.";
rewriteText(originalText);
