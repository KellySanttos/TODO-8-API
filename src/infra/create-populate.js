import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

//==== Frases
const FRASES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FRASES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "FRASE" varchar(64),
    "AUTOR" varchar(64)
  );`;

const ADD_FRASES_DATA = `
INSERT INTO "FRASES" (FRASE, AUTOR)
VALUES 
    ('Tá com medo de errar? Faz assim mesmo!', 'DESCONHECIDO'),
    ('Tá dificil? Pede ajuda.', 'DESCONHECIDO'),
    ('tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado', 'Roberto Shinyashiki'),
    ('A vida começa onde sua zona de conforto termina', 'DESCONHECIDO')
`

function criaTabelaFse() {
    db.run(FRASES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de frases");
    });
}


function populaTabelaFse() {
    db.run(ADD_FRASES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de frases");
    });
}


//==== Músicas
const MUSICAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "MUSICAS" (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    NOME VARCHAR(64),
    CANTOR VARCHAR(20),
    DURACAO REAL,
    ALBUM VARCHAR(32)
);`;

const ADD_MUSICAS_DATA = `INSERT INTO "MUSICAS" (NOME, CANTOR, DURACAO, ALBUM)
VALUES 
       ('20 Ligações', 'Baco Exu do Blues', '2,42', 'qvvjfa'),
       ('Samba in Paris', 'Baco Exu do Blues', '4,26', 'QVVJFA'),
       ('Tente outra vez', 'Raul Seixas', '2,21', 'Novo Aeon'),
       ('Por enquanto', 'Cássia Eller', '4,08', 'Por enquanto'),
`

function criaTabelaMsc() {
    db.run(MUSICAS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de Músicas");
    });
}


function populaTabelaMsc() {
    db.run(ADD_MUSICAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Músicas");
    });
}

//==== Livros
const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    NOME VARCHAR(64),
    AUTOR VARCHAR(20),
    QNT_DE_PAGINAS INT,
    DATA_DE_LANCAMENTO VARCHAR(11)
);`;

const ADD_LIVROS_DATA = `INSERT INTO "LIVROS" (NOME, AUTOR, QNT_DE_PAGINAS, DATA_DE_LANCAMENTO)
VALUES 
       ('A Cabana', 'Willian P. Young', '128', '12-05-2007')
`

function criaTabelaLvr() {
    db.run(LIVROS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de Livros");
    });
}


function populaTabelaLvr() {
    db.run(ADD_LIVROS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Livros");
    });
}

db.serialize( ()=> {
    criaTabelaFse();
    populaTabelaFse();
    criaTabelaMsc();
    populaTabelaMsc();
    criaTabelaLvr();
    populaTabelaLvr();
});