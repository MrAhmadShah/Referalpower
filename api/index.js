const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Random Email & Password Generate Function
function generateRandomEmail() {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let email = "";
    for (let i = 0; i < 10; i++) {
        email += chars[Math.floor(Math.random() * chars.length)];
    }
    return email + "@gmail.com";
}

function generateRandomPassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

// API Route for Auto Registration
app.post("/register", async (req, res) => {
    try {
        const email = generateRandomEmail();
        const password = generateRandomPassword();
        const referralLink = "https://u6578.me/#/register?ref=tqoj9s";

        res.status(200).json({
            message: "Account successfully created!",
            email: email,
            password: password,
            referralLink: referralLink
        });

    } catch (error) {
        res.status(500).json({ message: "Error creating account", error: error.message });
    }
});

// Default Route
app.get("/", (req, res) => {
    res.send("Backend is Running!");
});

// Export for Vercel
module.exports = app;
