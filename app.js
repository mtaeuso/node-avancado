const { response } = require('express');
const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const fetch = require('node-fetch')

const buscaCep = require('./src/function/buscaCep');
const buscaPais = require('./src/function/buscaPais');

app.use(bodyParser.urlencoded({extend:true}))
  app.use(bodyParser.json())


app.set('view engine', 'ejs');
app.set('views', './src/views')


app.get("/", (req,res) => {
    res.render("index")
})

app.post('/envia-cep', async (req, res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)

    res.render('resultado', {dado: resultado})
})


//segundo input


app.post("/envia-pais", async (req, res) => {
    const { pais } = req.body
    const resultadopais = await buscaPais(pais)

    res.render('resultpais', {dado: resultadopais})
    
})




app.listen(3335);