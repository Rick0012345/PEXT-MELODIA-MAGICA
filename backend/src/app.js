require('dotenv').config();
const express = require('express');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(express.json());

// Rotas
app.use('/items', itemRoutes);

// Inicializar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});