const Database = require("./config")

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE appointment (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            data TEXT,
            hora TEXT,
            doctor TEXT
        )`);

        await db.exec(`CREATE TABLE medrecords (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            dtnasc TEXT,
            convenio TEXT,
            descricao TEXT,
            register_time TEXT
        )`);
        
        await db.exec(`CREATE TABLE patient (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT,
            dtnasc TEXT,
            contato TEXT,
            endereco TEXT,
            cep TEXT,
            bairro TEXT,
            uf TEXT,
            cidade TEXT,
            cpf TEXT,
            rg TEXT,
            convenio TEXT,
            FOREIGN KEY(id) REFERENCES users(id)
        )`);

        await db.exec(`CREATE TABLE doctor (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT,
            dtnasc TEXT,
            contato TEXT,
            endereco TEXT,
            crm TEXT
        )`);

        await db.close()
    }
}

initDb.init();