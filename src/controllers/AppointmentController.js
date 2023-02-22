const Database = require('../db/config');

module.exports = {
    async index(req, res) {
        const db = await Database()
        const nome = req.body.nome
        const data = req.body.data
        const hora = req.body.hora
        const doctor = req.body.doctor
        const appointmentId = req.params.appointment

        /* Verificar se a senha está correta */
        const verifyRoom = await db.get(`SELECT * FROM users WHERE pass = ${pass}`)
        if (verifyRoom.pass == password) {
            if (action == "delete") {
                await db.run(`DELETE FROM appointment WHERE id = ${questionId}`)
            } else if (action == "check") {
                await db.run(`UPDATE appointment SET name = ${nome}, date = ${data}, time = ${hora}, doctor = ${doctor} WHERE id = ${appointmentId}`)
            }
            res.redirect(`/appointment/${appointmentId}`)
        } /*else {
            res.render('passincorrect', { appointmentId: appointmentId })
        }*/
    },
    async create(req, res) {
        const db = await Database()
        const nome = req.body.patientName
        const data = req.body.patientScheduleDate
        const hora = req.body.patientScheduleHour
        const doctor = req.body.patientDoctors

        await db.run(`INSERT INTO appointment(
                name,
                date,
                time,
                doctor
            ) VALUES(
                "${nome}",
                "${data}",
                "${hora}",
                "${doctor}"
            )`)
        res.redirect(`/menu/agendarconsulta`)
    },
    async list(req, res) {
        const db = await Database()

        //const patient = await db.all(`SELECT * FROM patient order by patient.nome`) strftime('%d/%m/%Y', data)
        //const appointments = await db.all(`SELECT nome, data, hora, doctor FROM appointment order by data`)
        const appointments = await db.all(`SELECT name, date, time, doctor FROM appointment order by date`)
        //const appointments = await db.all(`SELECT a.name, a.date, a.time, a.doctor, p.name, p.id as patientId FROM appointment as a CROSS JOIN patient as p where a.name == p.name order by date`)
        let isNoAppointment

        if (appointments.length == 0) return isNoAppointment == true
        res.render("Secretary/ListAppointments", {
            appointment: appointments,
            isNoAppointment: isNoAppointment, 
            appointmentCount: appointments.length > 1 ? `${appointments.length} resultados` : `${appointments.length} resultado`,
            title: 'Listar Consultas | e-Consulta'
        })
    },
    async reschedule(req, res) {
        const db = await Database()
        const nome = req.body.patientName
        const data = req.body.patientScheduleDate
        const dataOld = req.body.patientScheduleDateOld
        const hora = req.body.patientScheduleHour
        const horaOld = req.body.patientScheduleHourOld
        const doctor = req.body.patientDoctors
        const doctorOld = req.body.patientDoctorsOld

        await db.run(`UPDATE appointment SET
                date = "${data}",
                time = "${hora}",
                doctor = "${doctor}" 
           WHERE
                name = "${nome}" and
                date = "${dataOld}" and
                time = "${horaOld}" and
                doctor = "${doctorOld}";
            )`)
        res.redirect(`/menu/reagendarconsulta`)
    },
    async cancel(req, res) {
        const db = await Database()
        const nome = req.body.patientName
        const data = req.body.patientScheduleDate
        const hora = req.body.patientScheduleHour
        const doctor = req.body.patientDoctors

        await db.run(`DELETE FROM appointment where
            name = "${nome}" and
            date = "${data}" and
            time = "${hora}" and
            doctor = "${doctor}"
        `)
        res.redirect(`/menu/cancelarconsulta`)
    },
    async listAppointments(req, res){
        const db = await Database()

        //const patient = await db.all(`SELECT * FROM patient order by patient.nome`) strftime('%d/%m/%Y', data)
        const appointments = await db.all(`SELECT * FROM appointment CROSS JOIN patient where date = date(datetime('now','localtime')) and patient.name = appointment.name order by time `)
        let isNoAppointment

        if (appointments.length == 0) { isNoAppointment = true}

        res.render("Doctor/ListCurrentDayAppointments", {
            appointment: appointments,
            isNoAppointment: isNoAppointment, 
            appointmentCount: appointments.length > 1 ? `${appointments.length} resultados` : `${appointments.length} resultado`,
            title: 'Consultas de Hoje | e-Consulta'
        })
    },
    async createAsPatient(req, res) {
        const db = await Database()
        const nome = req.body.patientName
        const data = req.body.patientScheduleDate
        const hora = req.body.patientScheduleHour
        const doctor = req.body.patientDoctors

        await db.run(`INSERT INTO appointment (
                name,
                date,
                time,
                doctor
            ) VALUES(
                "${nome}",
                "${data}",
                "${hora}",
                "${doctor}"
            )`)
        res.redirect(`/menu/ScheduleAppointment`)
    },
    async rescheduleAsPatient(req, res) {
        const db = await Database()
        const nome = req.body.patientName
        const data = req.body.patientScheduleDate
        const dataOld = req.body.patientScheduleDateOld
        const hora = req.body.patientScheduleHour
        const horaOld = req.body.patientScheduleHourOld
        const doctor = req.body.patientDoctors
        const doctorOld = req.body.patientDoctorsOld

        await db.run(`UPDATE appointment SET
                date = '${data}',
                time = '${hora}',
                doctor = '${doctor}' 
           WHERE
                name = '${nome}' and
                date = '${dataOld}' and
                time = '${horaOld}' and
                doctor = '${doctorOld}';
            )`)
        res.redirect(`/menu/RescheduleAppointment`)
    },
    async listAsPacient(req, res) {
        const db = await Database()

        //const patient = await db.all(`SELECT * FROM patient order by patient.nome`) strftime('%d/%m/%Y', data)
        const appointments = await db.all(`SELECT nome, data, hora, doctor FROM appointment order by data`)
        let isNoAppointment

        if (appointments.length == 0) return isNoAppointment == true

        res.render("Patient/ListAppointment", {
            appointment: appointments,
            isNoAppointment: isNoAppointment, 
            appointmentCount: appointments.length > 1 ? `${appointments.length} resultados` : `${appointments.length} resultado`,
            title: 'Listar Consultas | e-Consulta'
        })
    },
    async cancelAsPatient(req, res) {
        const db = await Database()
        const nome = req.body.patientName
        const data = req.body.patientScheduleDate
        const hora = req.body.patientScheduleHour
        const doctor = req.body.patientDoctors

        await db.run(`DELETE FROM appointment where
            name = "${nome}" and
            date = "${data}" and
            time = "${hora}" and
            doctor = "${doctor}"
        `)
        res.redirect(`/menu/CancelAppointment`)
    }
} 