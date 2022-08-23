import db from "../infra/db-sqlite.js";

const getMusicsRandom = () => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM MUSICAS WHERE ID = (ABS(RANDOM()) % (SELECT (SELECT MAX(ID) FROM MUSICAS) +1 ))", (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(rows);
        }
      });
    });
  };

const postMusic = (model) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO MUSICAS(NOME, CANTOR, DURACAO, ALBUM)
          VALUES (?,?,?,?)`,
      [
        model.nome,
        model.cantor,
        model.duracao,
        model.album
      ],
      (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(model);
        }
      }
    );
  });
};



export { getMusicsRandom, postMusic };