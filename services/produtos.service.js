import { produtos } from "../db/produtos.js";


export const produtoService = {
    buscarProdutos: (req, reply)=>{
        return {

            code:200,
            status: "UP",
            message: "Servidor Rodando!"

        }
    },
    criarProduto: (req, reply) =>{
        let nextId = produtos.length + 1;
        const { id, nome, descricao, desconto, preco, ativo, categoria, data_cadastro } = req.body
         let produtoBd = {
            id: nextId,
            nome: `Produto ${idNext}`,
            descricao: `Produto ${descricao}`,
            desconto: `Produto ${desconto}`

            

         }
    } 
}
