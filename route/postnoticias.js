module.exports = (app) => {
    app.post('/postnoticias', async (req, res) => {
        try {
            const { titulonoticia, conteudonoticia, tiponoticia } = req.body;

            // Verifique se todos os campos necessários estão presentes
            if (!titulonoticia || !conteudonoticia || !tiponoticia) {
                return res.status(400).send("Preencha todos os campos obrigatórios.");
            }

            // Conecte-se ao banco de dados
            await app.DbClient.connect();

            // Insira a notícia no banco de dados
            const resultado = await app.DbClient.db("portalnoticias")
                .collection("noticias")
                .insertOne({
                    titulonoticia,
                    conteudonoticia,
                    tiponoticia,
                    datahoracadastro: new Date() // Aqui é corrigido para new Date()
                });

            // Verifique se a inserção foi bem-sucedida
            if (resultado.insertedCount > 0) {
                res.status(200).send("Notícia Gravada com sucesso!");
            } else {
                res.status(500).send("Não foi possível gravar a notícia.");
            }
        } catch (error) {
            console.error(error); // Registre o erro para depuração
            res.status(500).send("Erro interno no servidor. Tente novamente mais tarde.");
        }
    });
};