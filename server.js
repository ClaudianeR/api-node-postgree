import Fastify from "fastify";
import { produtoService } from "./services/produtos.service.js";
import { connection } from "./db/db.js";
import { config } from "./db/config/index.js";

const fastify = Fastify({
  logger: false,
});

connection();

const PORT = 5000;

fastify.get("/", (req, reply) => {
  
  reply.send({
    code: 200,
    status: "UP",
    message: "Servidor Rodando!",
  });
});

fastify.get('/produtos', async (req, res) => {
  const result = await config.query('SELECT *FROM produtos');
  return result.rows;
})

// Rotas fastify

/* fastify.get("/produto/:id", produtoService.buscarProdutoporid);
fastify.get("/produtos", produtoService.buscarProdutos);
fastify.get("/produto/?status=ativo", produtoService.buscarProdutos);
fastify.post("/produto", produtoService.criarProduto);
fastify.put("/produto/:id", produtoService.atualizarProduto);
fastify.patch("/produto/:id", produtoService.atualizarParcialProduto);
fastify.delete("/produto/:id", produtoService.deleteProduto); */

//GET /produto GET /produtos GET /produto/?status=ativo 
//POST /produto 
//PUT /produto/:id 
//PATCH /produto/:id 
//DELETE /produto/:id

fastify.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error("Erro ao subuir o servidor", err);
    return;
  }
  console.log(`Server ins now listening on ${address}`);
});
