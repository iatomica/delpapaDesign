import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { config } from './config/index.js';
import { errorHandler } from './middleware/errorHandler.js';

// Import route modules
import authRoutes from './routes/auth.routes.js';
import rendersRoutes from './routes/renders.routes.js';
import projectsRoutes from './routes/projects.routes.js';
import statsRoutes from './routes/stats.routes.js';
import consultationsRoutes from './routes/consultations.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    studio: 'Delpapa Design & Interior Architecture',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/renders', rendersRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/consultations', consultationsRoutes);

// Static client serving (for production and Docker)
const clientDistPaths = [
  path.resolve(__dirname, '../../client/dist'),
  path.resolve(process.cwd(), 'client/dist'),
  path.resolve(process.cwd(), '../client/dist'),
];

const foundDist = clientDistPaths.find(p => fs.existsSync(p));

if (foundDist) {
  app.use(express.static(foundDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(foundDist, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({
      message: 'Delpapa Design Studio API is running.',
      endpoints: [
        '/api/health',
        '/api/projects',
        '/api/stats',
      ]
    });
  });
}

// Error Handler
app.use(errorHandler);

// Start server
app.listen(config.port, '0.0.0.0', () => {
  console.log(`[Delpapa Design] Server running on port ${config.port} (${config.nodeEnv})`);
});
