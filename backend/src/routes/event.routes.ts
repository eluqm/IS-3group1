import express from 'express'
import EventController from '../api/evento.controller'

const router = express.Router()

//http://domain.com/api/v1/eventos
router.get('/', EventController.getEventos);

export default router