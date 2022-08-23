import express from 'express';
import { frasesController } from './controllers/Frases.js';
import { livrosController } from './controllers/LivrosController.js';
import { musicController } from './controllers/MusicController.js';

const app = express();
app.use(express.json());

livrosController(app);
frasesController(app);
musicController(app);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));

export default app;