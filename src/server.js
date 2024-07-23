import express from 'express';
import economyRoutes from './routes/economyRoutes.js';
import recommendationRoutes from './routes/recommendationRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/economy', economyRoutes);
app.use('/recommendations', recommendationRoutes);


app.listen(port, () => console.log(`API running on http://localhost:${port}`)
);
