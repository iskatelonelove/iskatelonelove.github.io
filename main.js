let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

tg.expand(); //расширяем на все окно

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({ "color": "#143F6B" }); //так изменяются все параметры

let btn = document.getElementById("btn"); //получаем кнопку скрыть/показать

btn.addEventListener('click', function () { //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isVisible) { //если кнопка показана
        tg.MainButton.hide() //скрываем кнопку
    }
    else { //иначе
        tg.MainButton.show() //показываем
    }
});

let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
btnED.addEventListener('click', function () { //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isActive) { //если кнопка показана
        tg.MainButton.setParams({ "color": "#E0FFFF" }); //меняем цвет
        tg.MainButton.disable() //скрываем кнопку
    }
    else { //иначе
        tg.MainButton.setParams({ "color": "#143F6B" }); //меняем цвет
        tg.MainButton.enable() //показываем
    }
});

Telegram.WebApp.onEvent('mainButtonClicked', function () {
    tg.sendData("some string that we need to send");
    //при клике на основную кнопку отправляем данные в строковом виде
});


let usercard = document.getElementById("usercard"); //получаем блок usercard

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
    ${tg.initDataUnsafe.user.last_name}
    ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем

let userid = document.createElement('p'); //создаем еще параграф
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем

// Игровая логика
const choices = ["rock", "scissors", "paper"];
const resultElement = document.getElementById("result");

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Ничья!";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "Вы победили!";
    }
    return "Вы проиграли!";
}

document.getElementById("rock").addEventListener('click', function () {
    playGame("rock");
});

document.getElementById("scissors").addEventListener('click', function () {
    playGame("scissors");
});

document.getElementById("paper").addEventListener('click', function () {
    playGame("paper");
});

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    resultElement.innerText = `Вы выбрали: ${playerChoice}, Компьютер выбрал: ${computerChoice}. ${result}`;
}
