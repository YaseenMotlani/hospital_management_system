// import "dotenv/config";

// const getOpenAIAPIResponse = async (message) => {
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${process.env.OPEN_API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "gpt-4o-mini",
//             messages: [
//                 {
//                     role: "user",
//                     content: message
//                 }
//             ]
//         })
//     };

//     try {
//         const response = await fetch(
//             "https://api.openai.com/v1/chat/completions",
//             options
//         );

//         const data = await response.json();
//         console.log("Raw API Response:", data);

//         // Extract assistant reply safely
//         const text = data?.choices?.[0]?.message?.content;

//         if (!text) {
//             console.log("⚠ No response from OpenAI!");
//             return "Sorry, I couldn't generate a response.";
//         }

//         return text;

//     } catch (err) {
//         console.log("OpenAI API Error:", err);
//         return "API error occurred.";
//     }
// };

// export default getOpenAIAPIResponse;

import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",   // Extremely powerful + FREE
            messages: [
                {
                    role: "user",
                    content: message
                }
            ]
        })
    };

    try {
        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            options
        );

        const data = await response.json();
        console.log("Raw Groq API Response:", data);

        const text = data?.choices?.[0]?.message?.content;

        if (!text) {
            console.log("⚠ No response from GROQ!");
            return "Sorry, I couldn't generate a response.";
        }

        return text;

    } catch (err) {
        console.log("GROQ API Error:", err);
        return "AI service error occurred.";
    }
};

export default getOpenAIAPIResponse;
