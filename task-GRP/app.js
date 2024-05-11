function generatePassword() {
    var useLetters = document.getElementById('useLetters').checked;
    var useSymbols = document.getElementById('useSymbols').checked;
    var useNumbers = document.getElementById('useNumbers').checked;
    var charset = {
        letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+{}:"<>?|[];\',./`~'
    };
    var characters = '';
    if (useLetters) characters += charset.letters;
    if (useNumbers) characters += charset.numbers;
    if (useSymbols) characters += charset.symbols;
    
    var password = '';
    var length = 12; // Default length for generated passwords
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('passwordInput').value = password;
}

function checkPasswordStrength() {
    var input = document.getElementById('passwordInput').value;
    var hasUpperCase = /[A-Z]/.test(input);
    var hasLowerCase = /[a-z]/.test(input);
    var hasNumbers = /\d/.test(input);
    var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(input);
var strength = "Weak"; // Default assumption

    // Check if all selected options are included
    if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
        strength = "Strong";
    }

    document.getElementById('result').innerText = `Password is ${strength}`;
}