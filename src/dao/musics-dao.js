import db from "../infra/db-sqlite.js";

const getMusics = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM MUSICAS", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const getMusicsId = (id) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM MUSICAS WHERE ID = ?", id, (erro, rows) => {
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



export { getMusics, getMusicsId, postMusic };