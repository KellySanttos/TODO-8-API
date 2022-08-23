import { getBooks, getBooksId, postBook } from "../dao/livros-dao.js";
import LivrosModel from "../models/Livros.js";

export const livrosController = (app) => {

    app.get("/books", async (req, res) => {
        const resposta = await getBooks();
        const livroAleat = await getBooksId(Math.round(Math.random() * (resposta.length -1)))
        res.json({ livro: livroAleat })
    })

    app.post("/createbook",async (req, res) => {
        const { NOME, AUTOR, QNT_DE_PAGINAS, DATA_DE_LANCAMENTO } = req.body;
        const novoLivro = new LivrosModel(NOME, AUTOR, QNT_DE_PAGINAS, DATA_DE_LANCAMENTO);
        const resposta = await postBook(novoLivro);

        
        res.json({
            msg: "Livro inserido com sucesso",
            DICA: resposta
        })
    });
};