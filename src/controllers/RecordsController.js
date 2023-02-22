const Database = require("../db/config")

module.exports = {

    async open(req,res){
        const db = await Database()

        const patient = await db.all(`SELECT * FROM patient order by patient.name`)
        const patientAmil = await db.all(`SELECT * FROM patient where medicalInsurance = 'Amil'`)
        const patientBradesco = await db.all(`SELECT * FROM patient where medicalInsurance = 'Bradesco'`)
        const patientGNDI = await db.all(`SELECT * FROM patient where medicalInsurance = 'NotreDame Intermedica'`)
        const patientSula = await db.all(`SELECT * FROM patient where medicalInsurance = 'Sulamerica'`)
        const patientTras = await db.all(`SELECT * FROM patient where medicalInsurance = 'Trasmontano'`)
        const records = await db.all(`SELECT * , count(*) as qtd FROM medrecords`)
        //console.log(patientAmil)
        let isNoRecords
        const recordsHandle = records.map((records)=> {
            return records.qtd > 1 ? `${records.qtd} resultados` : `${records.qtd} resultado`
        })
        if (records.length == 0 || patientAmil.length == 0 || patientBradesco.length == 0 || patientGNDI.length == 0 || patientSula.length == 0 || patientTras.length == 0) {
            isNoRecords == true
        }

        res.render("Doctor/ListMedicalRecords", {
            patient: patient,
            records: records, 
            isNoRecords: isNoRecords, 
            recordsCount: recordsHandle,

            patientAmil: patientAmil,
            patientAmilCount: patientAmil.length > 1 ? `${patientAmil.length} resultados` : `${patientAmil.length} resultado`,
            
            patientBradesco: patientBradesco,
            patientBradescoCount: patientBradesco.length > 1 ? `${patientBradesco.length} resultados` : `${patientBradesco.length} resultado`,
            
            patientGNDI: patientGNDI,
            patientGNDICount: patientGNDI.length > 1 ? `${patientGNDI.length} resultados` : `${patientGNDI.length} resultado`,
            
            patientSula: patientSula,
            patientSulaCount: patientSula.length > 1 ? `${patientSula.length} resultados` : `${patientSula.length} resultado`,
            
            patientTras: patientTras,
            patientTrasCount: patientTras.length > 1 ? `${patientTras.length} resultados` : `${patientTras.length} resultado`,
            
            title:'Ver Prontuário | e-Consulta'
        })
    },

    async create(req, res){
        const db = await Database()
        let name = req.body.patientName
        let age = req.body.patientAge
        let health = req.body.patientHealthInsurance
        let description = req.body.patientDescription
        

        await db.run(`INSERT INTO medrecords(
            name,
            birthday,
            medicalInsurance,
            description,
            registerTime
        ) VALUES(
            "${name}",
            "${age}",
            "${health}",
            "${description}",
            datetime('now', 'localtime')
        )`)

        res.redirect(`/menu/med/novoprontuario`)
    },

    enter(req,res){
        const recordId = req.body.recordId
        res.redirect(`/record/${recordId}`)
    },
}