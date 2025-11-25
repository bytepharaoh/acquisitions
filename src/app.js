import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello from Devproject API');
});
export default app;
