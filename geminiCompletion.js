const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";
const place = "chennai";
const date = "";
const description =
  "event went very well with more the 40 peoples and 100 online peoples , done annadhan, neivaithyams and abishekamna and alankaram";
let prompt = `\nInstructions:\n;

Transform the given content into a polished, professional article suitable for publication on Nithyanandapedia.

General Requirements:
1. Language & Style:
   - Use formal, professional language
   - Ensure proper grammar and punctuation
   - Maintain active voice where appropriate
   - Use clear, concise sentences
   - Avoid colloquial expressions

2. Structure & Format:
   - Organize content in logical paragraphs
   - Use consistent formatting
   - Include appropriate section headings if needed
   - Maintain proper spacing and alignment

3. Content Quality:
   - Remove redundant words and phrases
   - Add relevant context where necessary
   - Include only factual, verifiable information
   - Ensure terminology consistency
   - Preserve all proper nouns and titles exactly as written

4. Spiritual Context:
   - Maintain respectful tone
   - Include the standard blessing line: "With blessings of Supreme Pontiff of Hinduism Bhagawan Sri Nithyananda Paramashivam"
   - Preserve the spiritual significance of the content
   - Use correct spiritual terminology

5. Technical Aspects:
   - Follow encyclopedia writing style
   - Add appropriate references where needed
   - Maintain consistent date formats
   - Use proper capitalization for sacred terms

Original content: ${description}

Additional specific requirements for this content (if any):
[Add specific requirements related to the particular content being transformed]`;

console.log(prompt);
model.generateContent(prompt).then((result) => {
  console.log(result.response.text());
});

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Replace with your actual API key
// const API_KEY = "AIzaSyBV1Rvj8CXsL_4wd-K0NiSykpLHsingM8E";
// const genAI = new GoogleGenerativeAI(API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// async function rewriteDescription(description, options = {}) {
//   try {
//     const { place, date, targetAudience } = options;

//     let prompt = `Rewrite the following description to be more descriptive, correct any errors, and add relevant details. Include a standard greeting and appropriate filler messages to enhance readability. If possible, add information about the place and date, if provided. Tailor the language to the target audience if specified.\n\nDescription:\n${description}\n\n`;

//     if (place) {
//       prompt += `Place: ${place}\n`;
//     }
//     if (date) {
//       prompt += `Date: ${date}\n`;
//     }
//     if (targetAudience) {
//       prompt += `Target Audience: ${targetAudience}\n`;
//     }

//     prompt += "\nInstructions:\n";
//     prompt +=
//       "- Use vivid language and imagery to make the description more engaging.\n";
//     prompt +=
//       "- Correct any grammatical errors, typos, and factual inaccuracies.\n";
//     prompt += "- Add relevant details to enrich the description.\n";
//     prompt +=
//       "- Include a friendly greeting at the beginning and smooth transitions between sections.\n";
//     prompt +=
//       "- If place information is provided, include relevant details about the location, such as landmarks, history, or points of interest.\n";
//     prompt +=
//       "- If date information is available, contextualize the description within that time frame.\n";
//     prompt +=
//       "- Ensure the rewritten description is appropriate for the specified target audience if provided.\n";
//     prompt += "- Keep the length reasonable and avoid unnecessary jargon.\n";

//     const result = await model.generateText({
//       prompt: prompt,
//     });

//     const rewrittenDescription = result.response.text;
//     return rewrittenDescription;
//   } catch (error) {
//     console.error("Error rewriting description:", error);
//     return "An error occurred while processing your request.";
//   }
// }

// // Example usage (same as before):
// async function main() {
//   const originalDescription = "Old book store. Sells books.";
//   const options = {
//     place: "Powell's City of Books, Portland, OR",
//     date: "October 26, 2024",
//     targetAudience: "Book lovers and tourists",
//   };

//   const rewritten = await rewriteDescription(originalDescription, options);
//   console.log(rewritten);

//   const originalDescription2 = "Quick brown fox jumps over the lazy dog.";
//   const rewritten2 = await rewriteDescription(originalDescription2);
//   console.log("\nNo extra options:\n", rewritten2);

//   const originalDescription3 = "Badly speld descripson. Need fix.";
//   const rewritten3 = await rewriteDescription(originalDescription3);
//   console.log("\nSpelling errors:\n", rewritten3);
// }

// main();
