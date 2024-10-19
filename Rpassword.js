let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$&/|";
let length = 8;

function generatePassword() {
    let password = "";  
    let allCharacters = characters;

    if (document.getElementById('numberCheckbox').checked) {
        allCharacters += numbers;
    }

    if (document.getElementById('symbolCheckbox').checked) {
        allCharacters += symbols;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    document.getElementById('password').value = password;
}

document.querySelector('.button').addEventListener('click', generatePassword);
