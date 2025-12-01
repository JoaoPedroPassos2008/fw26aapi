const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://joaopassos2:2008Passos@joaopassos.wv5xmcy.mongodb.net/?retryWrites=true&w=majority&appName=joaopassos";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
module.exports = (app) => {
    const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})
app.DBClient = client
}