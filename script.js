function createAccount() {
    var referralLink = document.getElementById("referral-link").value;

    if(referralLink) {
        // Random Email & Password Generate Karna
        var randomEmail = generateRandomEmail();
        var randomPassword = generateRandomPassword();

        console.log("Generated Email: " + randomEmail);
        console.log("Generated Password: " + randomPassword);

        // Form Auto-fill Aur Submit Karna (Yeh apne backend ke liye hoga)
        alert("Account Created!");

        // Flight Mode Notification Show Karna
        document.getElementById("flight-mode-notification").style.display = "block";
    } else {
        alert("Please enter a valid referral link.");
    }
}

function generateRandomEmail() {
    var randomString = Math.random().toString(36).substring(2, 15);
    return randomString + "@gmail.com";
}

function generateRandomPassword() {
    var randomString = Math.random().toString(36).substring(2, 15);
    return randomString;
}
