const passwordBox =  document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=[]{}|/?";

const allCHars = upperCase + lowerCase + numbers + symbols;

function createPssword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while(lenght > password.length) {
        password += allCHars[Math.floor(Math.random() * allCHars.length)];
    }
    
    passwordBox.value = password
}
const genPassBtn = document.querySelector("#genPassBtn");
genPassBtn.addEventListener("click", createPssword)


function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("skopiowano hasło do schowka")

}
const copyPassBtn = document.querySelector("#copyPass");
copyPassBtn.addEventListener("click",copyPassword);