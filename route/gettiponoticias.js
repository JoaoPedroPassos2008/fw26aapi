module.exports = (app) => {
    app.get('/noticias/tipo/:tiponoticias', async (req, res) => {
        try {
            const tiponoticias = req.params.tiponoticias
            await app.DBClient.connect();
            const noticias = await app.DBClient.db('portalnoticias').collection('noticias').find({tiponoticias: new RegExp(tiponoticias,'i')}).toArray()
            res.json(noticias) 
        } finally {
            // Ensures that the client will close when you finish/error
            await app.DBClient.close();
        }

    })
}