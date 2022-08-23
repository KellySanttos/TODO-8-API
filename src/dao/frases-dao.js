import db from "../infra/db-sqlite.js";

const getFrases = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM FRASES", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const getFrasesId = (id) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM FRASES WHERE ID = ?", id, (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(rows);
        }
      });
    });
  };

const postFrase = (model) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO FRASES(FRASE, AUTOR)
          VALUES (?,?)`,
      [
        model.frase,
        model.autor
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



export { getFrases, getFrasesId, postFrase };