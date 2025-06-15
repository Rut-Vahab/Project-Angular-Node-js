import { Router } from "express";
import { sendEmail } from '../controllers/mailController.js';

const mailRouter = Router();

mailRouter.post('/send-email', sendEmail);

export default mailRouter;
