// Strudel Server - Entorno de desarrollo
// Uso: npm run dev

import { createServer } from 'http';
import { readFile, readdir } from 'fs/promises';
import { join, extname } from 'path';

const PORT = 3000;
const SESSION_DIR = './src/sessions';

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.strudel': 'text/plain',
  '.md': 'text/markdown',
};

const handler = async (req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url;
  let filePath = join(process.cwd(), url);

  // API: Listar sesiones disponibles
  if (url === '/api/sessions') {
    try {
      const files = await readdir(SESSION_DIR);
      const sessions = files
        .filter(f => f.endsWith('.strudel'))
        .map(f => ({ name: f.replace('.strudel', ''), file: f }));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(sessions));
    } catch (e) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // Servir archivos estáticos
  try {
    const content = await readFile(filePath);
    const ext = extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain' });
    res.end(content);
  } catch (e) {
    res.writeHead(404);
    res.end('Not found');
  }
};

createServer(handler).listen(PORT, () => {
  console.log(`
🎵 Pol & ZeK Strudel Studio
   http://localhost:${PORT}

📁 Sesiones: http://localhost:${PORT}/api/sessions
  `);
});
