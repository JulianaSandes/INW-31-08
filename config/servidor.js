//importar o pcote express
const express = require('express')
//exectar o express aplication
const app = express()

//configurar a porta remota e local
const porta = process.env.PORT || 3000

//importar o pcote consign
const consign = require('consign')
//executar e configurar o consign 
consign().include('./routes').into(app)

//definir a pasta dos assets (css, imagens, js)
app.use(express.static('./src/'))
//definir os conteudos com acesso externo
module.exports = {app,porta}
