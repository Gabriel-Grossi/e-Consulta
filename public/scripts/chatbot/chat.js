let coll = document.querySelector(".collapsible");
let content = document.querySelector(".content");

coll.addEventListener("click", () => content.classList.toggle("active"));

let today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes();

const getTimeChat = () => {
    const hourText = hours < 10 ? hours = "0" + hours : hours,
        minutesText = minutes < 10 ? minutes = "0" + minutes : minutes;
    let timeNow = `${hourText}:${minutesText}`;
    return timeNow;
}

//const hourMessageAM = hours >= 0 && hours<=12 ? greeting = 'Bom dia': hourMessagePM;
const hourMessagePM = hours >= 13 && hours <= 17 ? greeting = 'boa tarde' : greeting = 'boa noite';

const firstBotMessage = () => {
    let userInput = document.getElementById("userInput"),
        firstMessage = `Olá, ${hours >= 0 && hours <= 12 ? greeting = 'bom dia' : hourMessagePM}, eu sou o Médi. Como posso te ajudar?`,
        time = getTimeChat(),
        botStarterMsg = document.getElementById("botStarterMessage");
    botStarterMsg.innerHTML = `<p class="botText"><span>${firstMessage}</span></p>`;
    $("#chat-timestamp").append(time);
    userInput.scrollIntoView(false);
}

firstBotMessage();

let chatBottom = document.getElementById("chat-bar-bottom")

const getHardResponse = (userText) => {
    let botResponse = getBotResponse(userText),
        botHtml = `<p class="botText"><span>${botResponse}</span></p>`;
    $("#chatbox").append(botHtml);
    chatBottom.scrollIntoView(true);
}
const getUserResponse = () => {
    let userText = $("#textInput").val(),
        userHtml = `<p class="userText"><span>${userText}</span></p>`;
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    chatBottom.scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

const buttonSendText = (sampleText) => {
    let userHtml = `<p class="userText"><span>${sampleText}</span></p>`;
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    chatBottom.scrollIntoView(true);
    setTimeout(() => {
        getHardResponse(sampleText);
    }, 1000)
}

const sendButton = () => getUserResponse();

$("#textInput").keypress((e) => {
    if (e.which == 13) {
        getUserResponse();
    }
});