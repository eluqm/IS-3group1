import express from 'express'
import CallForPaperController from '../api/evento.controller'

const router = express.Router()

//http://domain.com/api/v1/eventos
router.get('/', CallForPaperController.getCallForPapers);
router.get('/:id', CallForPaperController.getCallForPaper);
router.post('/', CallForPaperController.createCallForPaper);
router.delete('/:id', CallForPaperController.deleteCallForPaper);
router.patch('/:id', CallForPaperController.updateCallForPaper);

export default router;
