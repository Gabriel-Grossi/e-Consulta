const Database =  require('../db/config');

module.exports = {
    async index(req, res) {
        const db = await Database()
        const email = req.params.email
        const pass = req.params.password
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password
    
        /* Verificar se a senha está correta */
        const verifyRoom = await db.get(`SELECT * FROM users WHERE email = ${email} and pass = ${pass}`)
        if (verifyRoom.pass == password) {
            if (action == "delete") {
                await db.run(`DELETE FROM patient WHERE id = ${questionId}`)
            } else if (action == "check") {
                //await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
            }
            //res.redirect(`/room/${roomId}`)
        } else {
            res.render('passincorrect', { roomId: roomId })
        }
    },
    async create(req, res) {
        const db = await Database()
        const nome = req.body.nome
        const email = req.body.email
        const bday = req.body.dtnasc
        const contact = req.body.contato
        const address = req.body.endereco
        const addressComp = req.body.complemento
        const addressNumber = req.body.numero
        const cep = req.body.cep
        const neighborhood = req.body.bairro
        const state = req.body.uf
        const city = req.body.cidade
        const cpf = req.body.cpf
        const rg = req.body.rg
        const convenio = req.body.convenio
        //const patientId = req.params.patient

        const endereco = `${address}, ${addressNumber} - ${addressComp} `
    
        await db.run(`INSERT INTO patient(
                name,
                email,
                birthday,
                phone,
                address,
                cep,
                neighborhood,
                state,
                city,
                cpf,
                rg,
                medicalInsurance
            ) VALUES(
                "${nome}",
                "${email}",
                "${bday}",
                "${contact}",
                "${endereco}",
                "${cep}",
                "${neighborhood}",
                "${state}",
                "${city}",
                "${cpf}",
                "${rg}",
                "${convenio}"
            )`)
    
        //const patientId = await db.all(`SELECT id FROM patient where nome= ${nome}`)
        res.redirect(`/menu/sec/cadastrarpaciente`)
    },
    async open(req,res){
        const db = await Database()
        const patientId = req.params.patientId
        const patient = await db.all(`SELECT * FROM patient where id=${patientId}`)
        const patientXRecords = await db.all(`SELECT * FROM patient INNER JOIN medrecords on medrecords.name = patient.name and patient.id=${patientId}`)
        let isNoRecords

        if (patientXRecords.length == 0) {
            isNoRecords = true
        }

        res.render("patient", {
            patient: patient, 
            isNoRecords: isNoRecords, 
            records: patientXRecords,
            title:"Paciente | e-Consulta"
        })
    },
    async list(req,res){
        const db = await Database()

        const patient = await db.all(`SELECT * FROM patient order by patient.name`)
        const records = await db.all(`SELECT * FROM medrecords`)
        let isNoRecords

        if (records.length == 0) {
            isNoRecords == true
        }

        res.render("Secretary/ListPacients", {
            patient: patient,
            records: records, 
            isNoRecords: isNoRecords, 
            recordsCount: records.length > 1 ? `${records.length} resultados` : `${records.length} resultado`, 
            title:'Listar Pacientes | e-Consulta'
        })
    },
} 