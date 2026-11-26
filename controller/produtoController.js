
const produtoModel = require('../model/produtoModel');

async function listar(req, res) {
    try {
        const produtos = await produtoModel.listarTodos();

        res.status(200).json(produtos);

    } catch (erro) {
        console.error('Erro ao listar produtos:', erro.message);

        res.status(500).json({
            mensagem: 'Erro ao consultar o banco de dados'
        });
    }
}

async function buscar(req, res) {
    try {
        const id = req.params.id;

        const produto = await produtoModel.buscarPorId(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: 'Produto não encontrado'
            });
        }

        res.status(200).json(produto);

    } catch (erro) {
        console.error('Erro ao buscar produto:', erro.message);

        res.status(500).json({
            mensagem: 'Erro ao consultar o banco de dados'
        });
    }
}

module.exports = { listar, buscar };
