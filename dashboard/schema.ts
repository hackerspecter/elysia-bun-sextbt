// No arquivo de exportação
export const tabelas = {
    setores: `
        CREATE TABLE setores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            setor TEXT
        );
    `,
    prateleiras: `
        CREATE TABLE prateleiras (
            id INTEGER PRIMARY KEY,
            prateleira TEXT,
            FOREIGN KEY (id) REFERENCES setores(id) -- Chave estrangeira referenciando o nome do setor
        );
    `,
};
 