const getBotResponse = (input) => {
    if (input == "Olá" || input == "Oi" || input == "E aí?" || input == "Olá Médi" || input == "Oi Médi") {
        return "Olá, como posso te ajudar?";
    }
    else if (input == "Obrigado") {
        return "Estou aqui para te ajudar! 😉";
    }
    else if (input == "Consulta" || input == "consulta" ||
        input == "Quero agendar uma consulta" || input == "Agendar consulta" || input == "Agendar Consulta" || input == "agendar consulta" || input == "Agendamento de Consulta" ||
        input == "Quero reagendar uma consulta" || input == "Reagendar consulta" || input == "Reagendar Consulta" || input == "reagendar consulta" || input == "Reagendamento de Consulta" ||
        input == "Quero cancelar uma consulta" || input == "Cancelar consulta" || input == "Cancelar Consulta" || input == "cancelar consulta" || input == "Cancelamento de Consulta"
    ) {
        return "Para agendar, reagendar ou cancelar consultas, é preciso se logar no sistema primeiro! 😉";
    }
    else if (input == "Obrigado" || input == "obrigado") {
        return "Estou aqui para te ajudar! 😉";
    }
    else if (input == "Boa noite" || input == "Boa Noite" || input == "boa noite") {
        return "Boa Noite 🌚";
    }
    else if (input == "bom dia" || input == "Bom dia" || input == "Bom dia Médi" || input == "Bom dia Médi!") {
        return "Bom dia! 😉";
    }
    else if (input == "Como você está?" || input == "Como você tá?" || input == "Como vc tá?") {
        return "Estou bem! Melhor impossível 😎";
    }
    else if (input == 'Contato' || input == 'Telefone' || input == 'contato' || input == 'telefone' || input == 'telefone para contato' || input == 'Telefone para contato') {
        return `Contate-nos pelo número:  +55 11 95552-1013`;
    }
    else if (input == 'Localização' || input == 'localização' || input == 'local' || input == 'Local' || input == 'Aonde fica o e-Consulta?') {
        return `A sede do e-Consulta está localizada na Rua Borges de Figueiredo, 510 - Mooca, São Paulo - SP, 03110-010`;
    }
    else {
        return "Acho que não entendi o que você quis dizer 😔";
    }
}