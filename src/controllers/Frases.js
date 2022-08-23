import { getFrases, getFrasesId, postFrase } from "../dao/frases-dao.js";
import FrasesModel from "../models/FrasesMotivacionais.js";

export const frasesController = (app) => {

    app.get("/frases", async (req, res) => {
        const resposta = await getFrases();
        const fraseAleat = await getFrasesId(Math.round(Math.random() * (resposta.length -1)))
        res.json({ Dica_frase: fraseAleat })
    })

    app.post("/createfrase",async (req, res) => {
        const { FRASE, AUTOR } = req.body;
        const novaFrase = new FrasesModel(FRASE, AUTOR);
        const resposta = await postFrase(novaFrase);

        
        res.json({
            msg: "Frase inserida com sucesso",
            DICA: resposta
        })
    });
};