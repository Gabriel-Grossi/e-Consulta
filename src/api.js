const express = require('express')
const api = express.Router()
const AppointmentController = require('./controllers/AppointmentController')
const RecordsController = require('./controllers/RecordsController')
const PatientController = require('./controllers/PatientController')
const AuthController = require('./controllers/AuthController')
const ManagementController = require('./controllers/ManagementController')

api.post('/access', AuthController.open)

api.post('/patient/create', PatientController.create)
api.post('/patient/:patient/:patient/:action', PatientController.index)
api.post('/appointment/createAppointment', AppointmentController.createAsPatient)
api.post('/appointment/updateAppointment', AppointmentController.rescheduleAsPatient)
api.post('/medrecords/create', RecordsController.create)

