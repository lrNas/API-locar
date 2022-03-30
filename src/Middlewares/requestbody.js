const requestBody = (req, res, next) => {
    //Adiciona cabeçalhos que requests à partir do REACT não possuem.
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

module.exports = requestBody;