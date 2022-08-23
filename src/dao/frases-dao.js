import db from "../infra/db-sqlite.js";

const getFrasesRandom = () => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM FRASES WHERE ID = (ABS(RANDOM()) % (SELECT (SELECT MAX(ID) FROM FRASES) +1 ))", (erro, rows) => {
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
  


export { getFrasesRandom, postFrase };