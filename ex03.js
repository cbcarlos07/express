const express = require('express')
const server = express()

server.use('/api', function(req, res, next){
    console.log('Inicio...')
    next()
    console.log('Fim...')
})

server.use('/api', function(req, res){
    console.log('Resposta...')
    res.send('<h1>API!</h1>')
})

server.get('/teste', function(req, res){
    res.send('<h1>teste</h1>')
})

server.listen(3000, () => console.log('Executando...'))