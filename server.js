import express from 'express';
import cors from 'cors';
import * as babel from '@babel/core';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.post('/transpile', async (req, res) => {
  const { code } = req.body;
  
  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  try {
    const result = babel.transformSync(code, {
      presets: ['@babel/preset-env'],
      filename: 'session.strudel'
    });

    res.json({ transpiled: result.code });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`🎵 Strudel Server running on http://localhost:${PORT}`);
});
