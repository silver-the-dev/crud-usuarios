const sql = require("./db");

async function testarConexao(){
    try{
        const result = await sql`
            CREATE TABLE usuarios(
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                senha VARCHAR(100) NOT NULL,
                criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        console.log(result);
    } catch(err){
        console.error("Erro no banco de dados: ", err)
    } finally{
        await sql.end();
    }
}

testarConexao();