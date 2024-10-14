import express from 'express';
import workshopRouter from './routers/workshopRouter.js';
import vehicleRouter from './routers/vehicleRouter.js';
import maintenanceRouter from './routers/maintenanceRouter.js' ;
import connectDB from './config/db.js';

connectDB();

const app = express();
app.use(express.json());

app.use('/oficina', workshopRouter);
app.use('/veiculo', vehicleRouter);
app.use('/manutencao', maintenanceRouter);

app.listen(3000, () => console.log('Server running on port 3000')) 