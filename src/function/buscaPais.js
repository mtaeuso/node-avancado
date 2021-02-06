const fetch = require('node-fetch')


module.exports = async function buscaPais(pais) {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${pais}`) 
    const json = await response.json()

    return json
}
