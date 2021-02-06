const fetch = require('node-fetch')


module.exports = async function buscaCep(cep) {
    const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`) 
    const json = await response.json()

    return json
}


