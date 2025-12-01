module.exports = (app)=>{
    app.get("/",(req,res)=>{
        res.sender("home.ejs")
    })
}