const express = require('express')
const store = require('store2')
const AppointmentController = require('./controllers/AppointmentController')
const RecordsController = require('./controllers/RecordsController')
const PatientController = require('./controllers/PatientController')
const AuthController = require('./controllers/AuthController')
const ManagementController = require('./controllers/ManagementController')

const route = express.Router()

route.get('/', (req, res) =>
    res.render("index",
        {
            title: 'e-Consulta | Home'
        },
    ))

route.get('/contact', (req, res) => res.render("faleconosco",
    {
        title: 'e-Consulta | Fale Conosco'
    })
)
route.get('/about', (req, res) => res.render("sobrenos",
    {
        title: 'e-Consulta | Sobre Nós'
    })
)

route.get('/login', (req, res) => res.render("login", { title: 'e-Consulta | Login' }))
route.post('/access', AuthController.open)
route.post('/updatePassword', AuthController.update)
route.get('/wrongcredentials', (req, res) => res.render("WrongCredentials", { title: 'e-Consulta | Credenciais inválidas' }))
route.get('/forgotpassword', (req, res) => res.render("ForgotPassword", { title: 'e-Consulta | Esqueci a Senha' }))

/*LA - Doctors*/

//route.get('/menu/:category', AuthController.enter)
route.get('/menu/med', (req, res) => res.render("home_med", {
    sidebar: 'sidebar',
    title: 'e-Consulta | Acesso Médico',
    nome: `${store('nome') == null ? '' : store('nome')}`
}))

route.get('/menu/med/verprontuario', RecordsController.open)
route.get('/menu/med/novoprontuario', (req, res) => res.render("Doctor/CreateMedicalRecords", { title: 'e-Consulta | Novo Prontuário' }))
route.post('/medrecords/create', RecordsController.create)
route.get('/menu/med/atestado', (req, res) => res.render("Doctor/CreateSickNote", { title: 'Emitir Atestado | e-Consulta' }))
route.get('/menu/med/receituario', (req, res) => res.render("Doctor/CreatePrescription", { title: 'Emitir Receituário | e-Consulta' }))
route.get('/menu/med/calendar/today', AppointmentController.listAppointments)
route.get('/menu/med/calendar/thisweek', (req, res) => res.render("schedule", { title: 'Consultas da Semana | e-Consulta' }))


/*LA - Secretary*/
route.get('/menu/sec', (req, res) => res.render("home_sec", {
    sidebar: 'sidebar_sec',
    title: 'e-Consulta | Acesso Secretaria',
    nome: `${store('nome') == null ? '' : store('nome')}`
}))

route.get('/menu/sec/cadastrarpaciente', (req, res) => res.render("Secretary/CreatePacient"))
route.post('/patient/create', PatientController.create)
route.get('/menu/sec/listarpacientes', PatientController.list)
route.get('/patient/:patientId', PatientController.open)
//Formato que o formulário dentro da modal tem que passar a informação
route.post('/patient/:patient/:patient/:action', PatientController.index)


route.get('/menu/agendarconsulta', (req, res) => res.render("Secretary/ScheduleAppointment"))
route.post('/appointment/create', AppointmentController.create)
route.get('/menu/listarconsultas', AppointmentController.list)
route.get('/menu/reagendarconsulta', (req, res) => res.render("Secretary/RescheduleAppointment"))
route.post('/appointment/reschedule', AppointmentController.reschedule)
route.get('/menu/cancelarconsulta', (req, res) => res.render("Secretary/CancelAppointment"))
route.post('/appointment/cancel', AppointmentController.cancel)
route.post('/appointment/cancelAsPatient', AppointmentController.cancelAsPatient)

/*LA - Patient*/

route.get('/menu', (req, res) => {
    res.render("home", {
        title: 'e-Consulta | Portal do Paciente',
        nome: `${store('nome') == null ? '' : store('nome')}`
    })
})
route.get('/menu/ScheduleAppointment', (req, res) => res.render("Patient/ScheduleAppointment", { title: 'e-Consulta | Agendar Consulta' }))
route.post('/appointment/createAppointment', AppointmentController.createAsPatient)
route.get('/menu/RescheduleAppointment', (req, res) => res.render("Patient/RescheduleAppointment", { title: 'e-Consulta | Reagendar Consulta' }))
route.post('/appointment/updateAppointment', AppointmentController.rescheduleAsPatient)
route.get('/menu/CancelAppointment', (req, res) => res.render("Patient/CancelAppointment", { title: 'e-Consulta | Reagendar Consulta' }))
route.get('/menu/ListAppointments', AppointmentController.listAsPacient)


/*LA - Doc-Admin*/

route.get('/management', (req, res) => res.render("MedicalManagement/Home", { title: 'e-Consulta | Portal do Gestor' }))
route.get('/management/AppointmentsDashboard', ManagementController.appointments)

/*LA - Admin*/

module.exports = route;