let today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes();

const getTimeChat = () => {
    const hourText = hours < 10 ? hours = "0" + hours : hours,
        minutesText = minutes < 10 ? minutes = "0" + minutes : minutes;
    let timeNow = `${hourText}:${minutesText}`;
    return timeNow;
}

const hourMessagePM = hours >= 13 && hours <= 17 ? greeting = 'Boa tarde' : greeting = 'Boa noite';

const firstBotMessage = () => {
    let firstMessage = `${hours >= 0 && hours <= 12 ? greeting = 'Bom dia' : hourMessagePM}`,
        greetings = document.getElementById("greetings");
    greetings.innerHTML = `${firstMessage}`;
}

firstBotMessage()