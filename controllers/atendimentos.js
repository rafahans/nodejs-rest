module.exports = app => {
    app.get('/atendimentos' , (req, res) => res.send('Rota atendimentos, get') )

    app.post('/atendimentos' , (req, res) => {
        console.log(req.body)        
        res.send('Rota atendimentos, post') 
    })
}