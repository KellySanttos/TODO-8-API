import { getMusicsRandom, postMusic } from "../dao/musics-dao.js";
import MusicsModel from "../models/MusicRelaxing.js";

export const musicController = (app) => {

    app.get("/musics", async (req, res) => {
        const musicAleat = await getMusicsRandom();
        res.json({ música: musicAleat })
    })

    app.post("/createmusic",async (req, res) => {
        const { NOME, CANTOR, DURACAO, ALBUM } = req.body;
        const novaMusica = new MusicsModel(NOME, CANTOR, DURACAO, ALBUM);
        const resposta = await postMusic(novaMusica);

        
        res.json({
            msg: "Música inserida com sucesso",
            DICA: resposta
        })
    });
};