import db from "../infra/db-sqlite.js";

const getBooks = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM LIVROS", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const getBooksId = (id) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM LIVROS WHERE ID = ?", id, (erro, rows) => {
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



export { getBooks, getBooksId, postBook };