interface IMailTo {
   name: string;
   email: string;
}

interface IMailMessage {
   subject: string;
   body: string;
   attachment?: string[]; // a ? significa que não é um atributo obrigatório
}

interface IMessageDTO {
   // Data Transfer Object
   to: IMailTo;
   message: IMailMessage;
}

interface IEmailService {
   sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
   sendMail({ to, message }: IMessageDTO) {
      console.log(`Email enviado para ${to.name}: ${message.subject}!`);
   }
}

export default EmailService;
