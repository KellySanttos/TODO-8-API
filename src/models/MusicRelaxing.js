import { v4 as uuidv4 } from "uuid";

class Musicas {
    constructor(nome, cantor, duracao, album){
        this.id = uuidv4();
        this.nome = nome;
        this.cantor = cantor;
        this.duracao = duracao;
        this.album = album;
    }
}


export default Musicas;