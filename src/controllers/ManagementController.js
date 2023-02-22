const Database = require('../db/config');

module.exports = {
    /*async index(req, res) {
        const db = await Database()
        const email = req.params.email
        const pass = req.params.password
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password
    
        /* Verificar se a senha está correta 
        const verifyRoom = await db.get(`SELECT * FROM users WHERE email = ${email} and pass = ${pass}`)
        if (verifyRoom.pass == password) {
            if (action == "delete") {
                await db.run(`DELETE FROM patient WHERE id = ${questionId}`)
            } else if (action == "check") {
    
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
    
            }
            res.redirect(`/room/${roomId}`)
        } else {
            res.render('passincorrect', { roomId: roomId })
        }
    },*/

    async appointments(req, res) {
        const db = await Database()
        const appointmentTotalCount = await db.all(`SELECT * FROM app_count_year`)
        const appointmentTotalCountMonth = await db.all(`SELECT * FROM app_count_month`)
        const appointmentTotalCountPerDoctor = await db.all(`SELECT * FROM app_countbydoc_month order by value desc`)
        const appointmentTotalCountPerHealthInsurance = await db.all(`SELECT * FROM app_countbyhealthinsurance order by value desc`)
        const appointmentTotalCountNextMonth = await db.all(`SELECT * FROM app_appointmentsnextmonth`)
        

        res.render("MedicalManagement/AppointmentsDashboard", {
            appointmentTotalCount: appointmentTotalCount.length > 1 ? `${appointmentTotalCount.length} Consultas` : `${appointmentTotalCount.length} Consulta`,
            appointmentTotalCountMonth: appointmentTotalCountMonth.length  > 1 ? `${appointmentTotalCountMonth.length} Consultas` : `${appointmentTotalCountMonth.length} Consulta`,
            appointmentTotalCountPerDoctor: appointmentTotalCountPerDoctor,
            appointmentTotalCountPerHealthInsurance: appointmentTotalCountPerHealthInsurance,
            appointmentTotalCountNextMonth: appointmentTotalCountNextMonth.length > 1 ? `${appointmentTotalCountNextMonth.length} Consultas` : `${appointmentTotalCountNextMonth.length} Consulta`,
            title: "Controle de Consultas | e-Consulta"
        })
    },

    async medrecords(req,res){
        const medrecordsTotalCountMonth = await db.all(`SELECT * FROM med_medrecordsmonth`)
    }

    /*async list(req,res){
        const db = await Database()

        const patient = await db.all(`SELECT * FROM patient order by patient.nome`)
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
    },*/
} 