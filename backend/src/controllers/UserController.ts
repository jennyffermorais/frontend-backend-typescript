import { Request, Response } from 'express'; //importando a definição desses tipos
import EmailService from '../services/EmailService';

const users = [
   { name: 'Jennyffer', email: 'jennyffer@email.com' },
   { name: 'Jeferson', email: 'jeferson@email.com' },
];

export default {
   async index(req: Request, res: Response) {
      return res.json(users);
   },

   async create(req: Request, res: Response) {
      const emailService = new EmailService();

      emailService.sendMail({
         to: {
            name: 'Jennyffer',
            email: 'jennyffer@email.com',
         },
         message: { subject: 'Bem-vinda ao sistema', body: 'Seja bem-vinda!' },
      });
      return res.send();
   },
};
