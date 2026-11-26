
const conexao = require('./conexao');

async function listarTodos() {
    const sql = 'SELECT id, nome, peso, preco, data FROM produto ORDER BY id';

    const [linhas] = await conexao.query(sql);

    return linhas;
}

async function buscarPorId(id) {
    const sql = 'SELECT id, nome, peso, preco, data FROM produto WHERE id = ?';

    const [linhas] = await conexao.query(sql, [id]);

    return linhas[0];
}

module.exports = { listarTodos, buscarPorId };
