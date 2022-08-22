import { v4 as uuidv4 } from "uuid";

class Frases {
    constructor(frase, autor){
        this.id = uuidv4;
        this.frase = frase;
        this.autor = autor;
    }
}


export default Frases;