import {RequestHandler, response} from 'express';

class EventoController {
  static getEventos : RequestHandler = async (req, res) => {
      return res.json({msg: 'Eventos'})
  }
}

export default EventoController;