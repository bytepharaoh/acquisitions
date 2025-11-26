import express from 'express';
import logger from '#config/logger.js';
import helmet from 'helmet';
import morgan from 'morgan';
import winston from 'winston';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { timestamp } from 'drizzle-orm/gel-core';
import authRoutes from '#routes/auth.routes.js';
import securityMiddleware from '#middleware/security.middleware.js';

const app = express();
const { stream } = winston;
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  morgan('combined', {
    stream: { write: message => logger.info(message.trim()) },
  })
);
app.use(securityMiddleware);
app.get('/', (req, res) => {
  logger.info('Hello from Acquistions!');
  res.status(200).send('hello from Devproject API');
});
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Acquistions API is running!' });
});
app.use('/api/auth', authRoutes); //api/auth/sign-in
export default app;
