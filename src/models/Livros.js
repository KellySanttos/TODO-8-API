import { v4 as uuidv4 } from "uuid";

class Livros {
    constructor(nome, autor, qntDePaginas, dataDeLancamento){
        this.id = uuidv4;
        this.nome = nome;
        this.autor = autor;
        this.qntDePaginas = qntDePaginas;
        this.dataDeLancamento = dataDeLancamento;
    }
}


export default Livros;