import fastify from 'fastify';
import cors from '@fastify/cors';

const app = fastify({ logger: false });

app.register(cors, {
    origin: '*',
});


app.get('/', (res, reply) => {
    return {
        "code": 200,
        status: "UP",
        message: "Servidor Rodando!"
    }
})

app.get('/produtos', async (res, reply) => {

    const result = await config.query('SELECT *FROM produtos');
    return result.rows;
})

app.get('/produto/:id', async (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM produtos WHERE id = ${id}`
  console.log (`[QUERY]: ${query}`);

  const result = await config.query(query);

  if (result.rows.length === 0) {
        res.status(404).send(`Produto com id: ${id} não encontrado!`);
         return;
    }

   return result.rows;

})


app.delete('/produto/:id', async (req, res) => {
        const id  = req.params;
        const query = `DELETE FROM produtos WHERE id = ${id}`
        const result = await config.query(query);

        if (result.rowCount === 0) {
            res.status(404).send('Produto não encontrado para excluir');
            return;
        }

        res.status(200).send('Produto excluído com sucesso');
    })



// app.get('/produto/:id', async (req, res) => {
//     const { id } = req.params;

//     try {
//         const query = 'SELECT * FROM produtos WHERE id = $1';
//         const result = await config.query(query, [id]);

//         if (result.rows.length === 0) {
//             res.status(404).send('Produto não encontrado');
//             return;
//         }

//         res.send(result.rows[0]);
//     } catch (err) {
//         console.log('Erro ao buscar produto por ID:', err);
//         res.status(500).send('Erro ao buscar produto por ID');
//     }
// });


app.post('/produto', async (req, res) => {
    const { nome, descricao, desconto, preco, ativo, categoria, data_cadastro } = req.body;

    try {
        const query = 'INSERT INTO produtos (nome, descricao, desconto, preco, ativo, categoria, data_cadastro) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        const values = [nome, descricao, desconto, preco, ativo, categoria, data_cadastro];
        const result = await config.query(query, values);
        res.send(result.rows[0]);
    } catch (err) {
        console.log('Erro ao inserir produto:', err);
        res.status(500).send('Erro ao inserir produto');
    }
})

app.listen({ host: 'localhost', port: `5000` }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    //app.log.info(`Server listening on ${address}`);
    console.log(`Server listening on ${address}`);
});
