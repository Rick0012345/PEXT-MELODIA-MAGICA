require('dotenv').config();
const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Exemplo de rota para visualizar dados do banco
app.get('/items', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});