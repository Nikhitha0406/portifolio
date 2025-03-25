const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static("public")); // Serve static files like images

const portfolioData = {
    name: "Kukati Nikhitha",
    role: "Engineering Student | Web Developer | Data Analyst",
    about: "Computer Science and Engineering student at Mohan Babu University with a CGPA of 9.83. Passionate about web development and data analytics.",
    projects: [
        { name: "Netflix Movie Recommendation", url: "https://netflix-fa59eqc4rdpguifpiuf4qr.streamlit.app/" },
        { name: "Community Car Pooling", url: "https://github.com/Nikhitha0406/Carpooling" }
    ],
    skills: ["HTML", "CSS", "JavaScript", "Java", "Python", "Data Analysis", "Data Visualization"],
    contact: {
        email: "nikhithakukati4605@gmail.com",
        phone: "9177242744"
    }
};

app.get("/api/portfolio", (req, res) => {
    res.json(portfolioData);
});

// Serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
