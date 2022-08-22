export const frasesController = (app) => {

    app.get('/tips', (req, res) => {
        res.send(bdTarefas);
    });

    app.post("/create", (req, res) => {
        const { frases, autor } = req.body;

        const dataM = new TarefasM(frases, autor);

        bdTarefas.push(dataM)
        res.json({
            msg: "Frase inserida com sucesso",
            TAREFAS: dataM
        })
    });
};