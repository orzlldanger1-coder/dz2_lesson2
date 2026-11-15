const a = 6;
const b = 20;
const c = 12;
const biggest = Math.max(a, b, c);
console.log(biggest)


const age = 25;
const result = age >= 18 && age <= 60;
console.log(result);

const userName = "Alihan"
const password = "12345"

const userNameInput = prompt ("Введите userName");
const passwordInput = prompt ("Введите password");
if (passwordInput === "12345" && userNameInput === "Alihan") {
    console.log("Вы успешно вошли в систему")
} else {
    console.log("Неккоректный username или password")
}


const answer1 = "Бишкек"
const answer2 = "HTML"
const answer3 = "JavaScript"
const answer4 = "Python"
const answer5 = "CSS"

const userAnswer1 = prompt("Столица Кыргызстана?");
const userAnswer2 = prompt("Как называется язык разметки сайтов?");
const userAnswer3 = prompt("Как называется язык программирования, который мы сейчас изучаем?");
const userAnswer4 = prompt("Назови язык программирования, названный в честь комедийного шоу?");
const userAnswer5 = prompt("Как называется язык стилей для сайтов?");

let score = 0;

if (userAnswer1 === answer1) {
    score++;
}
if (userAnswer2 === answer2) {
    score++;
}
if (userAnswer3 === answer3) {
    score++;
}
if (userAnswer4 === answer4) {
    score++;
}
if (userAnswer5 === answer5) {
    score++;
}

console.log("Количество правильных ответов:", score);

const number = 14;

if (number % 2 === 0 || number % 7 === 0) {
    console.log("Подходит")
} else {
    console.log("Не подходит")
}

const price = 5000;
if (price > 5000) {
    const discountPrice = price * 0.9;
    console.log(discountPrice);
} else {
    console.log(price);
}

const symbol = prompt("Введите одну английскую букву");

const vowelCheck =
    symbol === "a" ||
    symbol === "e" ||
    symbol === "i" ||
    symbol === "o" ||
    symbol === "u";

console.log(vowelCheck);

const value = Number(prompt("Введите число"));
const percentage = Number(prompt("Введите процент"));

const calculation = value * percentage / 100;

console.log(calculation);