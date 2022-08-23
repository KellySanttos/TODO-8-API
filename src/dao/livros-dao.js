import db from "../infra/db-sqlite.js";


const getBooksRandom = () => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM LIVROS WHERE ID = (ABS(RANDOM()) % (SELECT (SELECT MAX(ID) FROM LIVROS) +1 ))", (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(rows);
        }
      });
    });
  };

const postBook = (model) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO LIVROS(NOME, AUTOR, QNT_DE_PAGINAS, DATA_DE_LANCAMENTO)
          VALUES (?,?,?,?)`,
      [
        model.nome,
        model.autor,
        model.qntDePaginas,
        model.dataDeLancamento
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


export { getBooksRandom, postBook };