
const express = require('express');
const produtoController = require('../controller/produtoController');

const app = express();
const PORTA = process.env.PORT;

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('API da Mercearia funcionando');
});

// Rotas de produtos
app.get('/produtos', produtoController.listar);

app.get('/produtos/:id', produtoController.buscar);

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
